import Card from '../card/Card';
import Chart from '../chart/Chart';

function MainContent(){
return(
    <div className='ml-75 grow p-8 grid-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {/* <h2 className='text-2xl mb-4'>
        Play Areas */}
    {/* </h2> */}
    <div>
         <Card/>
    </div>
         <Chart/>
    </div>
)
}
export default MainContent;