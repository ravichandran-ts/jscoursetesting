var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var otherHeader = document.createElement('h3');
        otherHeader.textContent = 'Other Information';

        var othList = document.createElement('ul');
        var listItem = document.createElement('li');
        listItem.textContent = article.url;
        othList.appendChild(listItem);
        var listItem = document.createElement('li');
        listItem.textContent = article.imageURL;
        othList.appendChild(listItem);
        var listItem = document.createElement('li');
        listItem.textContent = article.imageURL;
        othList.appendChild(listItem);
        var listItem = document.createElement('li');
        listItem.textContent = article.Content;
        othList.appendChild(listItem);
        var listItem = document.createElement('li');
        listItem.textContent = article.tags;
        othList.appendChild(listItem);
    });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(otherHeaderHeader);
      articleDiv.appendChild(outerHeightList);

      articlesDiv.appendChild(articleDiv);
};

xhr.send();
