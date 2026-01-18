import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About FarmData
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Empowering agriculture with data while protecting farmer privacy
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                FarmData bridges the gap between Nigerian farmers and the agricultural ecosystem by providing valuable, aggregated insights while maintaining strict privacy standards.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that data-driven agriculture can transform food security, improve farmer livelihoods, and create sustainable growth across Nigeria's agricultural sector.
              </p>
              <p className="text-lg text-gray-600">
                By anonymizing and aggregating farmer data, we enable businesses, researchers, and policymakers to make informed decisions without compromising individual farmer privacy.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
                  <div className="text-gray-600">Farmer Contributors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">36</div>
                  <div className="text-gray-600">States Covered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-600">Crop Types</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">Anonymized Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy-First Approach
            </h2>
            <p className="text-lg text-gray-600">
              We never compromise on farmer privacy and data security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">No Personal Data</h3>
              <p className="text-gray-600">We never collect names, phone numbers, or exact locations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Advanced Encryption</h3>
              <p className="text-gray-600">Military-grade encryption protects all data in transit and at rest</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Compliance First</h3>
              <p className="text-gray-600">GDPR, CCPA, and Nigerian Data Protection Regulation compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Our transparent process ensures trust and quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Partner Networks</h3>
              <p className="text-gray-600">We work with verified farmer cooperatives and agricultural extension services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Data Collection</h3>
              <p className="text-gray-600">Standardized forms and mobile apps ensure consistent, quality data</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Privacy Processing</h3>
              <p className="text-gray-600">Advanced anonymization removes all personally identifiable information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Insight Delivery</h3>
              <p className="text-gray-600">Aggregated insights delivered through secure dashboards and APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Experts in agriculture, data science, and privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Dr. Amina Bello</h3>
              <p className="text-primary-600 mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">15+ years in agricultural development and data systems</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Chukwuemeka Okafor</h3>
              <p className="text-primary-600 mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">Former Google engineer, expert in scalable data systems</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg card-shadow text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Fatima Ibrahim</h3>
              <p className="text-primary-600 mb-2">Head of Privacy</p>
              <p className="text-gray-600 text-sm">GDPR specialist, focused on ethical data practices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;