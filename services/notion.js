const dotenv = require('dotenv').config()
const {Client} = require('@notionhq/client')
const notion = new Client({
    auth: process.env.NOTION_KEY,
})


const databaseId = process.env.DATABASE_ID

module.exports = async function getData() {
   
let results = []
let data = await notion.databases.query({
    database_id: databaseId,
});
results = [...data.results]

while (data.has_more) {
        data = await notion.databases.query({
        database_id: databaseId,
        start_cursor: data.next_cursor,
    });
    results = [...results, ...data.results]
}
    Hours = []
    date = []
    sort = []
    h = []
    const getHours = results.map((page)=>{
        sort.push([page.properties.Date.date.start,page.properties.Hours.number])
        Hours.push(page.properties.Hours.number)
    })
    sort.sort()
    for (let i = 0; i < 365; ++i){
        h.push(sort[i][1])
    } 
    for (let i = 0; i < 365; ++i){
        if (h[i]>0 && h[i]<=1){
            h[i] = 1
        }else if (h[i]>1 && h[i]<=3){
            h[i] = 2
        }else if (h[i]>3){
            h[i] = 3
        }
    } 
    return h
  }

 

