function getArticles () {
  console.log('ping')
  fetch('/scrape')
    .then(r => r.json())
    .then(d => {
      for (i = 0; i < d.length ; i++) {
        console.log(d)
        document.getElementById('articles').insertAdjacentHTML('afterbegin', `
                <div class="ui fluid card">
                  <div class="content">
                    <div class="header">${d[i].headline}</div>
                  </div>
                  <div class="content">
                    <h4 class="ui sub header"></h4>
                    <div class="ui small feed">
                      <div class="event">
                        <div class="content">
                          <div class="summary">
                            <div>${d[i].summary}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href='${d[i].url}'>
                      <div class="ui bottom attached button">
                        <i class="add icon"></i>
                          Read More
                      </div></a>
                  </div>
                </div>
        `)
      }
    })

  function save () {
    
  }

}
