function getArticles () {
  fetch('/scrape')
    .then(r => r.json())
    .then(d => {
      for (i = 0; i < d.length ; i++) {
        document.getElementById('articles').insertAdjacentHTML('afterbegin', `
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
                        <i id="icon" class="add icon"></i>
                          Save Article
                      </div>
                  </div>
                </div>
        `)
      }
    })
  }

function saveArticle(event) {
  let id = event.target.getAttribute('data-id')
  fetch('/article', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({id})
    })
    .then()
    .catch(e => console.log(e))
  }
