const beverages = [
  {
    "title": "Black Coffee",
    "description": "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.",
    "image": "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 1,
    "price": 128,
    "category": "coffee",
    "rank": 10,
  },
  {
    "title": "Latte",
    "description": "Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.",
    "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    "id": 2,
    "price": 204,
    "category": "coffee",
    "rank": 1,
  },
  {
    "title": "Caramel Latte",
    "description": "Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.",
    "image": "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 3,
    "price": 224,
    "category": "coffee",
    "rank": 7,
  },
  {
    "title": "Cappuccino",
    "description": "Cappuccino är en latte som är gjord med mer skum än ångad mjölk, ofta med ett strö av kakaopulver eller kanel på toppen. Ibland kan du hitta variationer som använder grädde istället för mjölk eller sådana som tillsätter smakämnen också.",
    "image": "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 4,
    "price": 92,
    "category": "coffee",
    "rank": 2,
  },
  {
    "title": "Americano",
    "description": "Med en liknande smak som svart kaffe består americano av en espresso skott utspätt med hett vatten.",
    "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 5,
    "price": 61,
    "category": "coffee",
    "rank": 3,
  },
  {
    "title": "Espresso",
    "description": "Ett espressoskott kan serveras ensamt eller användas som grund för de flesta kaffedrycker, som latte och macchiato.",
    "image": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 6,
    "price": 137,
    "category": "coffee",
    "rank": 4,
  },
  {
    "title": "Macchiato",
    "description": "Macchiaton är en annan espresso-baserad dryck som har en liten mängd skum på toppen. Det är det glada mellanrummet mellan en cappuccino och en doppio.",
    "image": "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 7,
    "price": 192,
    "category": "coffee",
    "rank": 6,
  },
  {
    "title": "Mocha",
    "description": "För alla chokladälskare där ute kommer ni att bli förälskade i en mocha. Mocha är en choklad-espressodryck med ångad mjölk och skum.",
    "image": "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "id": 8,
    "price": 93,
    "category": "coffee",
    "rank": 5,
  },
  {
    "title": "Hot Chocolate",
    "description": "Under kalla vinterdagar får en kopp varm choklad dig att känna dig bekväm och lycklig. Den får dig också att må bra eftersom den innehåller energigivande koffein.",
    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "id": 9,
    "price": 99,
    "category": "hot_beverage",
    "rank": 13,
  },
  {
    "title": "Chai Latte",
    "description": "Om du letar efter en smakfull varm dryck mitt i vintern, välj chai latte. Kombinationen av kardemumma och kanel ger en underbar smak.",
    "image": "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    "id": 10,
    "price": 89,
    "category": "hot_beverage",
    "rank": 11,
  },
  {
    "title": "Matcha Latte",
    "description": "Matcha latte är en grön, hälsosam kaffedryck med finkrossad matcha-te och mjölk, erbjuder mild sötma, en unik smak och en mild koffeinkick.",
    "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
    "id": 11,
    "price": 240,
    "category": "hot_beverage",
    "rank": 12,
  },
  {
    "title": "Seasonal Brew",
    "description": "Säsongs kaffe med olika smaktoner som karamell, frukt och choklad",
    "image": "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    "id": 12,
    "price": 269,
    "category": "seasonal",
    "rank": 16,
  },
  {
    "title": "Svart Te",
    "description": "Svart te föddes i Kina. Det är tillverkat av blad från en växt som kallas Camellia och kan smaksättas olika med frukter till exempel. En trevlig, varm, smakfull och aromatisk dryck som passar till vardagen.",
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
    "id": 13,
    "price": 63,
    "category": "tea",
    "rank": 18,
  },
  {
    "title": "Islatte",
    "description": "Iced latte är en kyld kaffedryck som görs genom att blanda espresso och kyld mjölk. Den serveras med isbitar och är även känd som cafè latte iced eller latte on the rocks.",
    "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww",
    "id": 14,
    "price": 255,
    "category": "coffee",
    "rank": 9,
  },
  {
    "title": "Islatte Mocha",
    "description": "Iced latte Mocha är en kombination av latte och mocha, som i sig är en kombination av choklad och kaffe. Den ger kalla dryckälskare en läcker upplevelse av choklad och kaffe.",
    "image": "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww",
    "id": 15,
    "price": 52,
    "category": "coffee",
    "rank": 8,
  },
  {
    "title": "Frapino Caramel",
    "description": "Det är en blandad eller bättre sagt skakad kaffe med vispad grädde på toppen. Ett måste för varma sommardagar.",
    "image": "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D",
    "id": 16,
    "price": 56,
    "category": "cold_beverage",
    "rank": 14,
  },
  {
    "title": "Frapino Mocka",
    "description": "Ännu en berömd och utsökt kall dryck för dem som föredrar choklad. Tänk dig smaken av en shake med choklad och vispad grädde på toppen.",
    "image": "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww",
    "id": 17,
    "price": 107,
    "category": "cold_beverage",
    "rank": 15,
  },
  {
    "title": "Apelsinjuice",
    "description": "Vi har inget att säga om vår nypressade apelsinjuice. Du måste prova den själv.",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww",
    "id": 18,
    "price": 287,
    "category": "cold_beverage",
    "rank": 22,
  },
  {
    "title": "Frozen Lemonade",
    "description": "Frozen lemonade är en uppfriskande sommardryck som kombinerar färskpressad citronsaft, is och sötning till en svalkande, syrlig och sötsyrlig smaksensation.",
    "image": "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9uYWRlJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D",
    "id": 19,
    "price": 242,
    "category": "cold_beverage",
    "rank": 23,
  },
  {
    "title": "Lemonad",
    "description": "Var känd i Paris först och blev sedan mycket populär i hela Europa. Denna söta, färglösa, kolsyrade dryck görs genom att blanda citronsaft och kolsyrat vatten.",
    "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
    "id": 20,
    "price": 249,
    "category": "cold_beverage",
    "rank": 24,
  }
];
export const topFiveBeveragesByRank = beverages
  .slice() // Create a shallow copy of the array to avoid mutating the original
  .sort((a, b) => a.rank - b.rank) // Sort the array by rank in ascending order
  .slice(0, 5); // Slice the sorted array to only include the first 5 elements
// console.log(topFiveBeveragesByRank);

export const coffees = beverages
  .filter(beverage => beverage.category === "coffee");
// console.log(beveragesByCoffee);

export const hotBeverages = beverages
  .filter(beverage => beverage.category === "hot_beverage");
// console.log(beveragesByHot);

export const coldBeverages = beverages
  .filter(beverage => beverage.category === "cold_beverage");
// console.log(beveragesByCold);

export const seasonals = beverages
  .filter(beverage => beverage.category === "seasonal");
// console.log(beveragesBySeasonal);

export const teas = beverages
  .filter(beverage => beverage.category === "tea");
// console.log(beveragesByTea);

/* ------------------------------- pagination ------------------------------- */
const beveragesCount = beverages.length;
const ITEMS_PER_PAGE = 3;
export const totalPages = Math.ceil(beveragesCount / ITEMS_PER_PAGE);

export function getTotalPages(data) {
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  return totalPages;
}

// export const totalPages = 9;
export function beveragesByPage(currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  return { partition: beverages.slice(offset, offset + ITEMS_PER_PAGE), length: getTotalPages(beverages) };
  // return beverages.slice(offset, offset + ITEMS_PER_PAGE);
}
export function getDataByPage(data, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  return { partition: data.slice(offset, offset + ITEMS_PER_PAGE), length: getTotalPages(data) };
}
export function coffeesByPage(currentPage) {
  return getDataByPage(coffees, currentPage);
}
export function hotBeveragesByPage(currentPage) {
  return getDataByPage(hotBeverages, currentPage);
}
export function coldBeveragesByPage(currentPage) {
  return getDataByPage(coldBeverages, currentPage);
}
export function seasonalsByPage(currentPage) {
  return getDataByPage(seasonals, currentPage);
}
export function teasByPage(currentPage) {
  return getDataByPage(teas, currentPage);
}



