fetch('/saved')
  .then(r => r.json())
  .then(d => {
    for (i = 0; i < d.length; i++) {
      document.getElementById('savedArticles').insertAdjacentHTML('afterbegin', `
                <div class="ui fluid card">
                  <div class="content">
                    <div class="header"><a href='${d[i].url}'>${d[i].headline}</a></div>
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
                      <div data-id='${d[i]._id}' class="ui bottom attached button blue button" onClick="saveArticle(event)">
                        <i class="add icon"></i>
                          Save Article
                      </div>
                  </div>
                </div>
        `)
    }
  })
  