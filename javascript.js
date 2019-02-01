/*
    Define a function that returns the median age of all
    the accounts. The function should accept the accounts
    array as input. Use the reduce() method.
*/

function getMedianAge(accounts) {

    let sortedArray = accounts.map(account => account.account_age).sort(function (a, b) { return a - b });
    let median = sortedArray.reduce((previous, current, index, array) => {

        if (index + .5 === array.length / 2) {
            return array[index-1]   
        }
        else if (index >= Math.round(array.length / 2)) {
            return previous
        } else {
            return (array[array.length - index-1] + array[index-1]) / 2
        }
    })
    return median
}
console.log(getMedianAge(accounts));


