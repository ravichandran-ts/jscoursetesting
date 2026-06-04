var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

//debugger;

xhr.onload = function() {
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = "Title: " + article.title;

        var author = document.createElement('p');
        author.textContent = "Author: " + article.author;

        var source = document.createElement('p');
        source.textContent = "Source: " + article.source;

        var category = document.createElement('p');
        category.textContent = "Category: " + article.category;

        var published = document.createElement('p');
        published.textContent = "Published: " + article.publishedAt;

        var description = document.createElement('p');
        description.textContent = "Description: " + article.description;

//        var otherHeader = document.createElement('h3');
//        otherHeader.textContent = 'Other Information';

//        var arturl = document.createElement('p');
//        arturl.textContent = article.url;

//        var arturlimg = document.createElement('p');
//        arturlimg.textContent = article.imageURL;

        var artcontent = document.createElement('p');
        artcontent.textContent = "Content: " + article.content;

        var arttags = document.createElement('p');
        arttags.textContent = "Tags: " + article.tags;

        var dashline = document.createElement('p');
        dashline.textContent = "------------------------------"

      articleDiv.appendChild(title);
      articleDiv.appendChild(author);
      articleDiv.appendChild(source);
      articleDiv.appendChild(category);
      articleDiv.appendChild(published);
      articleDiv.appendChild(description);
//      articleDiv.appendChild(otherHeader);
//      articlesDiv.appendChild(arturl);
//      articlesDiv.appendChild(arturlimg);
      articlesDiv.appendChild(artcontent);
      articlesDiv.appendChild(arttags);
      articlesDiv.appendChild(dashline);
      articlesDiv.appendChild(articleDiv);
      articlesDiv.appendChild(dashline);
    });
}

xhr.send();
