import React, { useState } from 'react';

interface RequestSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  datasetName: string;
}

const RequestSampleModal: React.FC<RequestSampleModalProps> = ({ isOpen, onClose, datasetName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    role: '',
    workEmail: '',
    intendedUse: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generatePDFData = () => {
    // Generate sample PDF data based on dataset category
    const sampleData = {
      'Crop Planting Trends': {
        data: {
          'Maize': { 'Jan': '1,200 ha', 'Feb': '1,900 ha', 'Mar': '3,000 ha', 'Apr': '5,000 ha' },
          'Rice': { 'Jan': '800 ha', 'Feb': '1,200 ha', 'Mar': '1,800 ha', 'Apr': '2,400 ha' }
        },
        insights: [
          'Maize planting shows 317% growth from January to April',
          'Rice planting demonstrates consistent 200% increase',
          'Peak planting season identified as April for both crops'
        ]
      },
      'Expected Harvest Timelines': {
        data: {
          'Maize': { 'Week 1': '450 tons', 'Week 2': '680 tons', 'Week 3': '890 tons' },
          'Rice': { 'Week 1': '380 tons', 'Week 2': '520 tons', 'Week 3': '750 tons' }
        },
        insights: [
          'Harvest volumes peak in week 3 across all crops',
          'Rice shows 97% increase from week 1 to week 3',
          'Optimal harvest window identified for maximum yield'
        ]
      },
      'Input Demand Signals': {
        data: {
          'Fertilizer': { 'Jan': 'Index 65', 'Feb': 'Index 78', 'Mar': 'Index 92' },
          'Seeds': { 'Jan': 'Index 45', 'Feb': 'Index 52', 'Mar': 'Index 68' }
        },
        insights: [
          'Fertilizer demand shows 42% increase over Q1',
          'Seed demand demonstrates consistent growth pattern',
          'Peak demand season aligns with planting periods'
        ]
      },
      'Risk Alerts': {
        data: {
          'Drought': { 'Low': '30%', 'Moderate': '40%', 'High': '25%', 'Critical': '5%' },
          'Pests': { 'Low': '35%', 'Moderate': '45%', 'High': '18%', 'Critical': '2%' }
        },
        insights: [
          'Drought risk peaks at moderate levels across regions',
          'Pest risk distribution shows lower critical threat levels',
          'Risk mitigation strategies should focus on moderate risk factors'
        ]
      },
      'Regional Performance Benchmarks': {
        data: {
          'North': { 'Performance': '78%', 'Infrastructure': '65%' },
          'South': { 'Performance': '85%', 'Infrastructure': '78%' }
        },
        insights: [
          'Southern region shows highest performance index at 85%',
          'Infrastructure scores correlate strongly with performance',
          'Investment opportunities identified in infrastructure development'
        ]
      }
    };

    return sampleData[datasetName as keyof typeof sampleData] || sampleData['Crop Planting Trends'];
  };

  const downloadPDF = async () => {
    // Create a simple PDF-like content (in real implementation, use a PDF library like jsPDF)
    const pdfContent = generatePDFData();
    
    // Create a text file that simulates PDF content
    const content = `
AGRICULTURAL DATA SAMPLE - ${datasetName.toUpperCase()}
Generated: ${new Date().toLocaleDateString()}

===============================================
SAMPLE DATA INSIGHTS
===============================================

${pdfContent.insights.map(insight => `• ${insight}`).join('\n')}

===============================================
DETAILED DATA TABLES
===============================================

${Object.entries(pdfContent.data).map(([key, values]) => `
${key}:
${Object.entries(values).map(([period, value]) => `  ${period}: ${value}`).join('\n')}
`).join('\n')}

===============================================
DATA METHODOLOGY
===============================================

This sample data represents anonymized and aggregated information
from farmer cooperatives across Nigeria. Individual farm data is never
shared to protect privacy and confidentiality.

For complete datasets and real-time access, please contact our sales team.

© 2024 AgriPulse - Nigeria Agricultural Insights Pilot
Contact: info@agripulse.ng | Phone: +234-XXX-XXXX-XXX
    `.trim();

    // Create and download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AgriPulse_Sample_${datasetName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log('PDF sample downloaded for:', datasetName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store submission (in real app, this would go to a database)
    const submission = {
      ...formData,
      datasetName,
      timestamp: new Date().toISOString()
    };
    
    console.log('Sample request submission:', submission);
    
    // Store in localStorage for demo purposes
    const existingSubmissions = JSON.parse(localStorage.getItem('sampleRequests') || '[]');
    existingSubmissions.push(submission);
    localStorage.setItem('sampleRequests', JSON.stringify(existingSubmissions));
    
    // Send email notification (in real app, this would be handled by backend)
    console.log('Email notification sent to admin for sample request:', submission);
    
    // Auto-download the sample PDF
    setTimeout(() => {
      downloadPDF();
    }, 1000);
    
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      role: '',
      workEmail: '',
      intendedUse: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Sample</h2>
            <p className="text-gray-600 mb-6">
              Request a sample dataset for <strong>{datasetName}</strong>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization / Company *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a role</option>
                  <option value="Buyer">Buyer</option>
                  <option value="NGO">NGO</option>
                  <option value="Government">Government</option>
                  <option value="Agribusiness">Agribusiness</option>
                  <option value="Research">Research</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="intendedUse" className="block text-sm font-medium text-gray-700 mb-1">
                  Intended Use *
                </label>
                <select
                  id="intendedUse"
                  name="intendedUse"
                  required
                  value={formData.intendedUse}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select intended use</option>
                  <option value="Market analysis">Market analysis</option>
                  <option value="Procurement planning">Procurement planning</option>
                  <option value="Risk assessment">Risk assessment</option>
                  <option value="Research">Research</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Your sample dataset has been sent to your email and downloaded automatically.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Sample Data Downloaded:</strong> Check your downloads folder for the sample file
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={downloadPDF}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Again
              </button>
              <button
                onClick={handleClose}
                className="flex-1 btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestSampleModal;