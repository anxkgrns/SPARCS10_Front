import React from 'react';

function parsingMoneyValue(value) {
    // 1000 -> 1,000
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default parsingMoneyValue;