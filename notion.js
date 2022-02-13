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
    const getHours = results.map((page)=>{
        Hours.push(page.properties.Hours.number)
    })

    return Hours
  }

 

