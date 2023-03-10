import axios from 'axios'
import moment from 'moment'

const formatSparkline = (numbers) =>{
    const sevenDaysAgo = moment().subtract(7, 'days').unix();
    let formattedSparkLine = numbers.map((item, index)=>{
        return{
            x: sevenDaysAgo + (index+1)*3600,
            y:item ,
        }
    })
return formattedSparkLine;

}
  
const formatMarketData = (data) =>{

    let formattedData = [];
    data.forEach(item =>{

        const formattedSparkLine = formatSparkline(item.sparkline_in_7d.price)

        const formatteditem = {
            ...item,
            sparkline_in_7d:{
                price: formattedSparkLine
            }
        }

        formattedData.push(formatteditem)

    });

    return formattedData;

}


export const getMarketData = async () =>{
    try {
        const response =  await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=7d");

        const data = response.data;

        const formattedResponse = formatMarketData(data);
        return formattedResponse;




    } catch (error) {
        console.log(error.message)
        
    }
}