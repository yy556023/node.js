const request = require('request');
const $ = require('cheerio');
const fs = require('fs');
const url = 'https://www.taipower.com.tw/TC/news2.aspx?mid=225';

request(url, function (error, response, html) {
    var newsList = [];
    var liList = $("#news_box3 > div.box_list > ul > li", html);
    liList.each(function (index, element) {
        var newsItem = {
            newsUrl: $(element).find("a").prop("href"),
            newsTitle: $(element).find("a div h3").text(),
            newsTime: $(element).find("a div span").text()
        };
        newsList.push(newsItem);
        console.log(newsItem);
    })
    // console.log(newsList);
    fs.writeFileSync("newsList.json", JSON.stringify(newsList, null, 2));
})
