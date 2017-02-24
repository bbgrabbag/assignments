var stockPrices = [4, 3,2,1,0];

var getMaxProfit = function (prices) {
    
    for (var i = 0; i < prices.length; i++) {
        
        for (var j = 0; j < prices.length; j++) {
            
            if (i < j) {
                difference = prices[j] - prices[i];
            }
        }
    }
   console.log (difference);
};

getMaxProfit(stockPrices); 