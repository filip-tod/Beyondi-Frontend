import Card from '../../assets/heading/CardDesctop.png';
import ChartPie from '../../assets/heading/chart.png';

export const ChartComponent = () => {
  return (
    <div className="relative md:bottom-20 bottom-10  items-center justify-center">
      {/* Card Image */}
      <img src={Card} className="w-full h-auto" alt="Card" />

      {/* Pie Chart positioned at bottom-right corner */}
      <div className="absolute bottom-5 right-0">
        <img
          src={ChartPie}
          className="w-28 h-28 md:w-48 md:h-48" // Increased size for Pie Chart
          alt="Pie Chart"
        />
      </div>
    </div>
  );
};
