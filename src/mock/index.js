var Mock =require('mockjs')
Mock.mock("/homes","get",require("./json/homes.json"))
Mock.mock("/movies","get",require("./json/movies.json"))
Mock.mock("/findmovies","get",require("./json/findmovies.json"))
Mock.mock("/categorys","get",require("./json/categorys.json"))
Mock.mock("/catebooks","get",require("./json/catebooks.json"))
Mock.mock("/books","get",require("./json/books.json"))
Mock.mock("/findbooks","get",require("./json/findbooks.json"))
Mock.mock("/xiaozua","get",require("./json/xiaozua.json"))
Mock.mock("/xiaozub","get",require("./json/xiaozub.json"))
Mock.mock("/xiaozuc","get",require("./json/xiaozuc.json"))
Mock.mock("/search","get",require("./json/search.json"))