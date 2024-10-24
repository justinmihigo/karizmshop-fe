import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TotalSalesCard = ({title , icon ,totalSales, percentageChange }:any) => {
 
  const isPositiveChange = percentageChange >= 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-black">{title}</h3>
        <div> {icon} </div>
        
      </div>
      <div className="mb-2">
        <span className="text-2xl font-bold">{totalSales}</span>
      </div>
      <div className={`text-xs flex items-center ${isPositiveChange ? 'text-green' : 'text-red'}`}>
        {isPositiveChange ? (
          <ArrowUpwardIcon className="h-4 w-4 mr-1" />
        ) : (
          <ArrowDownwardIcon className="h-4 w-4 mr-1" />
        )}
        <span>{Math.abs(percentageChange)}%</span>
      </div>
    </div>
  );
};

export default TotalSalesCard;