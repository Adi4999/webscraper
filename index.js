const PORT = 8000
const express= require('express')
const axios = require('axios')
const cheerio= require('cheerio')


const app= express()

const url= "https://www.cbsnews.com/"

axios(url)
.then(res=>{
   const html=  res.data
   
     const $ = cheerio.load(html)
     let articles=[]
     $('.component__item-wrapper > .item--type-article').each(function(){
        const title = $(this).find('h4').text().trim()
       const link=  $(this).find('a').attr('href')
       
       articles.push({title,link})
    
     

       //console.log(articles,articles.length)


     })
    
  
     
let jsonObject = articles.map(JSON.stringify);


let uniqueSet = new Set(jsonObject);
let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

//console.log(uniqueArray,uniqueArray.length);


    
    }).catch(err=>{
        console.log(err)
    })




app.listen(PORT, ()=>{
    console.log("Server running")
})