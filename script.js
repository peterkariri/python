const companies = [
  { name: "Company one", category: "Finance", start: "1981", end: "2007" },
  { name: "Company two", category: "Retail", start: "1954", end: "2017" },
  { name: "Company three", category: "Auto", start: "1985", end: "2009" },
  { name: "Company four", category: "Retail", start: "1990", end: "2023" },
  { name: "Company five", category: "Technology", start: "1981", end: "2021" },
  { name: "Company six", category: "Finance", start: "1956", end: "2007" },
  { name: "Company seven", category: "Auto", start: "1989", end: "2004" },
  { name: "Company eight", category: "Techonoly", start: "1978", end: "2023" },
  { name: "Company nine", category: "Retail", start: "1981", end: "2024" },
];
const ages = [
  33,
  22,
  45,
  66,
  32,
  45,
  64,
  67,
  84,
  23,
  23,
  21,
  ,
  67,
  64,
  34,
  34,
  53,
];
//filtering by category
/* function filterCompanies() {
  const filteredCompaniesArray = companies.filter(
    (company) => company.category === "Retail"
  );
  return filteredCompaniesArray;
}
console.log(filterCompanies(companies)); */
//mapping to produce only names
function filterCompanies() {
     let mappedArray=[]
     const filteredCompaniesArray = companies.map(
       (company) => company.name
     );
     return filteredCompaniesArray;
   }
   console.log(filterCompanies(companies));


   //calculating age of company
function calculateAgeOfCompany(startdate,endate){
        return endate-startdate;
}   
console.log(calculateAgeOfCompany(1990,2023));
//returning the comapany object with more date duration
function calculateAgeOfCompany(startdate,endate){
  let oldestCompany=companies.filter(
    (company)=>company.start<startdate&&company.end>endate
  )
  return oldestCompany;
}   



