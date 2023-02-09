// These are skills that might be identified in a Magento or Shopify Developer
const MagentoDeveloper1 = ['Magento', 'Magento associate  Developer', 'Magento Certified']
const ShopifyDeveloper1 = ['Shopify', 'Shopify certfieid', ,'liquidjs',]

// these profiles are placed in front of the webpage and into the profile section. By placing different people's resumes into the profile variable, it allows for the repetition of the process, without channgin any arrays or variables. 
let profile = MagentoDeveloper1

//these are the skills that the software has registered and is on the look out for. If any of these skillsa re identified in the resume, then they will be isolated and used to define that resume as a candidate for either Magento or Shopify dev roles.

let magentocategories = ['Magento', 'Magento 1', 'Magento 2', 'Magento Certified',];

let shopifycategories = ['Shopify+', 'shopify', 'Shopify +', ' Shopify2', 'Shopify sites']

// variable that adds a one to the different groups. 
plus1 = 1

// array variables that will have have the isolated magento categories pushed within. 
let magentoskills = [];
let shopifyskills = [];

//variables that will act as groups that register the number of specifci kinds of developers
let mdevelopersactive = 0
let sdevelopersactive = 0

//for loop that will repeatedly check each argument within the mention arrays and then check this against another array and find matches - this one for magento

for (let i = 0; i < magentocategories.length; i++) {
  for (let j = 0; j < profile.length; j++) { 
if (magentocategories[i] === profile[j]) {
magentoskills.push(magentocategories[i])
    }
  }
};

//for loop that will repeatedly check each argument within the mention arrays and then check this against another array and find matches - this one for shopify

for (let k = 0; k < shopifycategories.length; k++) {
  for (let j = 0; j < profile.length; j++) { 
if (shopifycategories[k] === profile[j]) {
shopifyskills.push(shopifycategories[k])
    }
  }
};

//this checks whether shopfiy skills were identified and will ad 1 to the number of Shopify Developers active.
if (shopifyskills.length > 0) {
sdevelopersactive += 1
}
//does the same for magento 
if (magentoskills.length > 0) {
mdevelopersactive += 1
}

//logs it all.
console.log('Magento Skills Identified: ' + magentoskills);
console.log('Shopfiy Skills Identified: ' + shopifyskills)

console.log('Number of Shopify Developers active: ' + sdevelopersactive)

console.log('Number of Magento Developers active: ' + mdevelopersactive)


