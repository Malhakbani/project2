$(function () {

  $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-05&sortBy=publishedAt&apiKey=fc36dad000394838bf2d8b8c33ef2b8d",
    function (res) {

      res.articles.forEach(function (result) {
        const pageone = 
          '<article class="article"><section class="featuredImage"><img src="' +
           result.urlToImage + '" alt="" /></section>' +
          '<section class="articleContent" ><a href="#" onclick="' +
          firstPage() 
          + '" ><h3>' + result.title + '</h3></a>' +
          '<h6>Lifestyle</h6></section><section class="impressions">MixUp</section><div class="clearfix"></div>' +
          '</article>'
        $('#Pageone').append(pageone)


      })
    })

  $("#news").on("click", function () {
    $("#popUp").attr("hidden", false);
    let urlApi = []
    $.ajax({
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=fc36dad000394838bf2d8b8c33ef2b8d",
      type: "get",
      success: function (res) {
        urlApi = res
        $(".article").remove();
        let added = 0
        res.articles.forEach(function (element) {
          added = added + 1
          const article = document.createElement('article')
          article.setAttribute('class', 'article')
          article.setAttribute('id', added)
          const Pageone = document.getElementById("Pageone")
          Pageone.appendChild(article)
          const featuredImage = document.createElement("section")
          featuredImage.setAttribute('class', 'featuredImage')
          article.appendChild(featuredImage)
          const img = document.createElement("img")
          img.setAttribute('src', `${element.urlToImage}`)
          featuredImage.appendChild(img)
          const articleContent = document.createElement('section')
          articleContent.setAttribute('class', 'articleContent')
          article.appendChild(articleContent)
          const a = document.createElement('a')
          a.setAttribute('href', '#')
          articleContent.appendChild(a)
          const h3 = document.createElement('h3')
          h3.setAttribute('class', 'title')
          h3.textContent = `${element.title}`
          a.appendChild(h3)
          const h6 = document.createElement('h6')
          h6.textContent = `${element.author}`
          articleContent.appendChild(h6)
          const impressions = document.createElement('section')
          impressions.setAttribute('class', 'impressions')
          $('.impressions').text("News")
          article.appendChild(impressions)
          const clearfix = document.createElement('div')
          clearfix.setAttribute('class', 'clearfix')
          article.appendChild(clearfix)

        });

        $("#popUp").attr("hidden", true);


      },
      error: function (xhr, status, err) {
        alert("not working")
      }

    });

  });
  function firstPage() {

    $.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-05&sortBy=publishedAt&apiKey=fc36dad000394838bf2d8b8c33ef2b8d",
      function (res) {
        res.articles.forEach(function (result) {
          let pageone = '<a href="#" class="closePopUp">X</a><div class="container" ><h1>' + result.title + '</h1>' +
            '<p>' + result.content + '</p>' +
            '<a href="#" class="popUpAction" target="_blank">Read more from source</a></div>'

          $('#popUp').append(pageone)
        })
      })

    var popup = document.getElementById("popUp");
    popup.classList.toggle("show");
  }
  
  $(".closePopUp").on("click", function () {
    $("#popUp").hide()
    $('#popUp.loader').css("background-size", "default")
  });

  $("#TNYT").on("click", function () {

    $("#popUp").attr("hidden", false);

    let urlApiNyt = []
    $.ajax({
      url: "https://content.guardianapis.com/search?api-key=e5463a25-4fd1-4344-b566-cbc843aaa49e",
      type: "get",
      data: {
        api_key: "e5463a25-4fd1-4344-b566-cbc843aaa49e"
      },
      success: function (response) {
        urlApiNyt = response
        $(".liveblog").remove();
        let added = 0
        response.results.forEach(function (element) {
          added = added + 1
          const liveblog = document.createElement('liveblog');
          liveblog.setAttribute('class', 'liveblog')
          liveblog.setAttribute('id', added)
          const Pageone = document.getElementById("Pageone")
          Pageone.appendChild(liveblog)
          const featuredImage = document.createElement("section")
          featuredImage.setAttribute('class', 'featuredImage')
          liveblog.appendChild(featuredImage)
          const img = document.createElement("img")
          img.setAttribute('src', `${element.thumbnail_standard}`)
          featuredImage.appendChild(img)
          const liveblogContent = document.createElement('section')
          liveblogContent.setAttribute('class', 'liveblogContent')
          liveblog.appendChild(liveblogContent)
          const a = document.createElement('a');
          a.setAttribute('href', '#')
          liveblogContent.appendChild(a)
          const h3 = document.createElement('h3')
          h3.setAttribute('class', 'title')
          h3.textContent = `${element.title}`;
          a.appendChild(h3)
          const h6 = document.createElement('h6');
          h6.textContent = `${element.section}`;
          liveblogContent.appendChild(h6)
          const impressions = document.createElement('section')
          impressions.setAttribute('class', 'impressions')
          $('.impressions').text("NY Times")
          liveblog.appendChild(impressions)
          const clearfix = document.createElement('div')
          clearfix.setAttribute('class', 'clearfix')
          liveblog.appendChild(clearfix)

        });

        $("#popUp").attr("hidden", true);


      }
    });

  });

});
