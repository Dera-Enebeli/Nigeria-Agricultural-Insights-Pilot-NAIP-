import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

interface SampleChartProps {
  type: 'line' | 'bar' | 'doughnut';
  title: string;
  category?: string;
}

const SampleChart: React.FC<SampleChartProps> = ({ type, title, category }) => {
  // Category-specific sample data
  const getCategoryData = () => {
    if (category?.includes('Crop Planting')) {
      return {
        line: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Maize Planting (Hectares)',
              data: [1200, 1900, 3000, 5000, 4200, 3100],
              borderColor: 'rgb(34, 197, 94)',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              tension: 0.4,
            },
            {
              label: 'Rice Planting (Hectares)',
              data: [800, 1200, 1800, 2400, 2000, 1600],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['North', 'South', 'East', 'West', 'Central'],
          datasets: [
            {
              label: 'Planting Progress (%)',
              data: [78, 85, 72, 90, 68],
              backgroundColor: 'rgba(34, 197, 94, 0.8)',
              borderColor: 'rgb(34, 197, 94)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Vegetables'],
          datasets: [
            {
              data: [35, 25, 20, 15, 5],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(168, 85, 247, 0.8)',
                'rgba(239, 68, 68, 0.8)',
              ],
              borderColor: [
                'rgb(34, 197, 94)',
                'rgb(59, 130, 246)',
                'rgb(234, 179, 8)',
                'rgb(168, 85, 247)',
                'rgb(239, 68, 68)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Harvest')) {
      return {
        line: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [
            {
              label: 'Expected Harvest Volume (Tons)',
              data: [450, 680, 890, 720, 1100, 950],
              borderColor: 'rgb(234, 179, 8)',
              backgroundColor: 'rgba(234, 179, 8, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Wheat'],
          datasets: [
            {
              label: 'Harvest Timeline (Weeks)',
              data: [12, 14, 10, 8, 16],
              backgroundColor: 'rgba(234, 179, 8, 0.8)',
              borderColor: 'rgb(234, 179, 8)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Early', 'On-Time', 'Late', 'Very Late'],
          datasets: [
            {
              data: [25, 50, 20, 5],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(239, 68, 68, 0.8)',
              ],
              borderColor: [
                'rgb(34, 197, 94)',
                'rgb(59, 130, 246)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Yield')) {
      return {
        line: {
          labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [
            {
              label: 'Average Yield (tons/hectare)',
              data: [2.1, 2.3, 2.5, 2.4, 2.7, 2.9],
              borderColor: 'rgb(34, 197, 94)',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Wheat'],
          datasets: [
            {
              label: 'Yield Range (tons/hectare)',
              data: [2.8, 3.2, 1.8, 1.5, 2.4],
              backgroundColor: 'rgba(168, 85, 247, 0.8)',
              borderColor: 'rgb(168, 85, 247)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Excellent', 'Good', 'Average', 'Below Average'],
          datasets: [
            {
              data: [20, 35, 30, 15],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(239, 68, 68, 0.8)',
              ],
              borderColor: [
                'rgb(34, 197, 94)',
                'rgb(59, 130, 246)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Demand') || category?.includes('Input')) {
      return {
        line: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Fertilizer Demand Index',
              data: [65, 78, 92, 88, 75, 82],
              borderColor: 'rgb(239, 68, 68)',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              tension: 0.4,
            },
            {
              label: 'Seed Demand Index',
              data: [45, 52, 68, 62, 48, 55],
              borderColor: 'rgb(34, 197, 94)',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['Fertilizer', 'Seeds', 'Equipment', 'Pesticides', 'Fuel'],
          datasets: [
            {
              label: 'Demand Index',
              data: [85, 72, 68, 78, 82],
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              borderColor: 'rgb(239, 68, 68)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Fertilizer', 'Seeds', 'Equipment', 'Crop Protection', 'Other'],
          datasets: [
            {
              data: [40, 25, 20, 10, 5],
              backgroundColor: [
                'rgba(239, 68, 68, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(107, 114, 128, 0.8)',
              ],
              borderColor: [
                'rgb(239, 68, 68)',
                'rgb(34, 197, 94)',
                'rgb(59, 130, 246)',
                'rgb(234, 179, 8)',
                'rgb(107, 114, 128)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Market') || category?.includes('Price')) {
      return {
        line: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Maize Price ($/ton)',
              data: [220, 235, 248, 262, 255, 268],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4,
            },
            {
              label: 'Rice Price ($/ton)',
              data: [380, 395, 410, 425, 418, 432],
              borderColor: 'rgb(168, 85, 247)',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Wheat'],
          datasets: [
            {
              label: 'Price Volatility Index',
              data: [15, 12, 18, 22, 10],
              backgroundColor: 'rgba(59, 130, 246, 0.8)',
              borderColor: 'rgb(59, 130, 246)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Grains', 'Legumes', 'Vegetables', 'Fruits', 'Other'],
          datasets: [
            {
              data: [45, 20, 15, 12, 8],
              backgroundColor: [
                'rgba(59, 130, 246, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(168, 85, 247, 0.8)',
              ],
              borderColor: [
                'rgb(59, 130, 246)',
                'rgb(34, 197, 94)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
                'rgb(168, 85, 247)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Risk')) {
      return {
        line: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Drought Risk Index',
              data: [25, 32, 45, 68, 72, 58],
              borderColor: 'rgb(239, 68, 68)',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              tension: 0.4,
            },
            {
              label: 'Pest Risk Index',
              data: [15, 18, 28, 35, 42, 38],
              borderColor: 'rgba(234, 179, 8, 0.8)',
              backgroundColor: 'rgba(234, 179, 8, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['Drought', 'Floods', 'Pests', 'Disease', 'Market'],
          datasets: [
            {
              label: 'Risk Level (1-10)',
              data: [7, 5, 6, 4, 8],
              backgroundColor: 'rgba(239, 68, 68, 0.8)',
              borderColor: 'rgb(239, 68, 68)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['Low', 'Moderate', 'High', 'Critical'],
          datasets: [
            {
              data: [30, 40, 25, 5],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(127, 29, 29, 0.8)',
              ],
              borderColor: [
                'rgb(34, 197, 94)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
                'rgb(127, 29, 29)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    if (category?.includes('Regional') || category?.includes('Performance')) {
      return {
        line: {
          labels: ['North', 'South', 'East', 'West', 'Central'],
          datasets: [
            {
              label: 'Performance Index',
              data: [78, 85, 72, 90, 68],
              borderColor: 'rgb(34, 197, 94)',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              tension: 0.4,
            },
          ],
        },
        bar: {
          labels: ['North', 'South', 'East', 'West', 'Central'],
          datasets: [
            {
              label: 'Infrastructure Score',
              data: [65, 78, 72, 88, 70],
              backgroundColor: 'rgba(59, 130, 246, 0.8)',
              borderColor: 'rgb(59, 130, 246)',
              borderWidth: 1,
            },
          ],
        },
        doughnut: {
          labels: ['North', 'South', 'East', 'West', 'Central'],
          datasets: [
            {
              data: [25, 30, 20, 20, 5],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(234, 179, 8, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(168, 85, 247, 0.8)',
              ],
              borderColor: [
                'rgb(34, 197, 94)',
                'rgb(59, 130, 246)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
                'rgb(168, 85, 247)',
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    }

    // Default data
    return {
      line: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Maize Planting (Hectares)',
            data: [1200, 1900, 3000, 5000, 4200, 3100],
            borderColor: 'rgb(34, 197, 94)',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            tension: 0.4,
          },
        ],
      },
      bar: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Expected Harvest (Tons)',
            data: [450, 680, 890, 720],
            backgroundColor: 'rgba(234, 179, 8, 0.8)',
            borderColor: 'rgb(234, 179, 8)',
            borderWidth: 1,
          },
        ],
      },
      doughnut: {
        labels: ['Maize', 'Rice', 'Sorghum', 'Millet', 'Others'],
        datasets: [
          {
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
              'rgba(34, 197, 94, 0.8)',
              'rgba(234, 179, 8, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(107, 114, 128, 0.8)',
            ],
            borderColor: [
              'rgb(34, 197, 94)',
              'rgb(234, 179, 8)',
              'rgb(59, 130, 246)',
              'rgb(168, 85, 247)',
              'rgb(107, 114, 128)',
            ],
            borderWidth: 1,
          },
        ],
      },
    };
  };

  const categoryData = getCategoryData();
  const lineData = categoryData.line;
  const barData = categoryData.bar;
  const doughnutData = categoryData.doughnut;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: type !== 'doughnut' ? {
      y: {
        beginAtZero: true,
      },
    } : undefined,
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={lineData} options={options} />;
      case 'bar':
        return <Bar data={barData} options={options} />;
      case 'doughnut':
        return <Doughnut data={doughnutData} options={options} />;
      default:
        return <Line data={lineData} options={options} />;
    }
  };

  return (
    <div className="chart-container">
      {renderChart()}
    </div>
  );
};

export default SampleChart;