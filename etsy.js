// Using the provided global items variable, use items.map(), items.reduce(), items.forEach, and items.filter() to help you answer the following questions. You cannot use the for loop.

// 1. Show me how to calculate the average price of all items. Please console.log the average.
    // wanted to use reduce, so needed to get an array of prices, so first got the array
var priceArray = getEtsyPrices(items);
function getEtsyPrices(listofPrices) {
    return listofPrices.map(function(item) {
        return item.price;
    }); 
}
    // console.log(priceArray); <--this was to make sure I got an array. I did.

    // now time to use reduce to add up the array and then divide by the length within the console.log
var total = priceArray.reduce(function(prev, next) {
    return prev + next;
}, 0);
console.log('The average price is ' + '$'+(total/priceArray.length).toFixed(2));

    // ANOTHER WAY TO FIND AN AVERAGE. Here, I've done it the way ManPreet did it to figure that method out. Modified it a bit so that we weren't doing math within the console.log. Wouldn't that *not* be the way to do it in reality? I mean, we wouldn't be console.logging this stuff to ourselves. Anyway, it was an experiment to figure that out.
var totalPrice = 0;

items.forEach(average);
function average(item) {
    (totalPrice += item.price)
}
var priceAverage = (totalPrice/items.length).toFixed(2);

console.log('The average price is ' + '$'+priceAverage);

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
    // Here we wanted to filter the entire list for items that were more than or equal to 14 AND less than or equal to 18 AND used USD currency.
var cheapItems = items.filter(function(item) {
  return (item.price >= 14 && item.price <= 18 && item.currency_code === 'USD');
});
console.log('Items that cost between $14.00 USD and $18.00 USD:');
console.log(cheapItems);
    // I tried to add "Items that cost between $14.00 USD and $18.00 USD: \n' to this console log, but then it listed the objects strangely and would not open them as they do now. So I put it back so that the objects in the console.log would at least work, and added it on a separate console log line so that the phrase would still be there. You told us that we didn't need to have the titles separately, because you just wanted to see everything, so I have not included the titles.

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
    // here I made a list of items, checked the console and saw that there was just one item, so called for the title and price by hard-code. But that's not so handy in the grand scheme of things. So Collin walked me through another option (see better option for GBP).
var british = items.filter(function(item) {
    return item.currency_code === 'GBP';
});
console.log(british[0].title, '£'+british[0].price);

// BETTER OPTION FOR GBP. 
    // If there were multiple results then I would need to use some kind of forEach. First I would need to filter the entire list for the GBP currency.
var british = items.filter(function(item) {
    return item.currency_code === 'GBP';
});
    // Then I would need to find the title and price for each of the smaller list of items.
british.forEach(function(britishItem) {
    console.log(britishItem.title, '£'+britishItem.price);
});

// 4. Show me how to find which items are made of wood. Please console.log the ones you find.
    // First I want to go through the list and find just the ones that are made of wood. They note this in the materials section. So if the materials list includes the word "wood," it should be included in a new array.
var searchTerm = 'wood';
var woodItems = items.filter(function(woodCraft) {
    return woodCraft.materials.includes(searchTerm);
});
    // now that I have a small list of items that meet the condition, I need to get the title for each of the items.
woodItems.forEach(function(woodItem) {
    console.log(woodItem.title);
})

// 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
    // I want to know for each items.materials array length >=8. Then need to console log the title and list of materials.

var numberMaterials = items.filter(function(ingredients) {
    return ingredients.materials.length >=8;
});
    // now that I have a list of items that meet that condition, I ned to get the title and list of items for each.
numberMaterials.forEach(function(itemMaterial) {
    console.log(itemMaterial.title, itemMaterial.materials.join('\n'))
})

// 6. Show me how to calculate how many items were made by their sellers
    // Need to make a new array of how many who_made answered i_did. Then console.log that variable with .length + ' were made by their sellers' to match Collin's output in the assignment.
var searchTerm = 'i_did';
var sellerMadeItems = items.filter(function(homemade) {
    return homemade.who_made.toLowerCase().includes(searchTerm.toLowerCase());
});
console.log(sellerMadeItems.length + ' were made by their sellers');