---
layout: default
title: Home
---

<!-- ===================== HERO ===================== -->
<!-- Driven by _data/profile.yml                      -->

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{{ site.data.profile.name }}</h1>
        <p class="subtitle">{{ site.data.profile.title }}</p>
        <p class="affiliation">{{ site.data.profile.position }}<br>
        {{ site.data.profile.lab }}<br>
        {{ site.data.profile.institution }}</p>
        <p class="bio-summary">{{ site.data.profile.bio }}</p>
        <div class="hero-links">
          {% for link in site.data.profile.links %}
          <a href="{{ link.url }}"{% unless link.icon == "email" %} target="_blank"{% endunless %}>
            {% case link.icon %}
            {% when 'email' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {% when 'scholar' %}
            <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor"><path d="M390.9 298.5c0 0 0 .1.1.1 9.2 19.4 14.4 41.1 14.4 64.1 0 83.1-63.9 151.5-144.7 159.1-4.4.5-8.8.7-13.3.7-4.4 0-8.9-.2-13.3-.7-80.8-7.6-144.7-76-144.7-159.1 0-23 5.2-44.8 14.5-64.2v-.1C125.8 251.1 173 218 228.1 211c4.3-.6 8.6-.9 13-.9h30.7c4.3 0 8.6.3 12.9.9 55 7 102.2 40.1 124.2 87.5zM511.9 163L380.2 48.6l-24.5 20.5-8.1-9.7L256 0 0 163h149.5l30.6-24.3c6.3-5 15.3-5 21.5.1l13.5 11.1 15.1-13.1c6-5.2 15.1-5.2 21.1.1l15.1 13.4 16-13.5c6.1-5.2 15.2-5.1 21.2.2l11 9.6 18.6-15.6H512l-.1 0z"/></svg>
            {% when 'github' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {% when 'linkedin' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {% when 'twitter' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            {% when 'researchgate' %}
            <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor"><path d="M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c6.9.3 23.1.8 35.6.8 41.6 0 71.8 15.6 71.8 48.4 0 26.5-21.4 44-44.8 49.7 9.1 14.4 37.8 67.3 50.8 76.4 3.5 2.4 8.1 4.2 13.2 4.5v7.6c-4.5.7-10.4 1.4-16.6 1.4-5.5.1-13.1-.8-19-5.4zm-78.4-105.6c40.3 0 50.4-26.4 50.4-42.4 0-22-14.4-39.5-42.4-39.5-6.6 0-11 .6-13.4 1.4v80.5h5.4z"/></svg>
            {% when 'cv' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            {% when 'website' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {% endcase %}
            {{ link.label }}
          </a>
          {% endfor %}
        </div>
      </div>
      <div class="hero-photo">
        <img src="{{ site.data.profile.photo | relative_url }}" alt="{{ site.data.profile.photo_alt | default: site.data.profile.name }}">
      </div>
    </div>
  </div>
</section>

<!-- ============= RESEARCH INTERESTS ============== -->
<!-- Driven by _data/interests.yml                    -->

<section class="section" id="research">
  <div class="container">
    <div class="section-header">
      <h2>Research Interests</h2>
      <p>{{ site.data.interests.headline }}</p>
    </div>
    <div class="interests-grid">
      {% for tag in site.data.interests.tags %}
      <span class="interest-tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </div>
</section>

<!-- ============= NEWS & HIGHLIGHTS =============== -->
<!-- Driven by _data/news.yml                        -->

<section class="section section-alt" id="news">
  <div class="container">
    <div class="section-header">
      <h2>News &amp; Highlights</h2>
    </div>
    <div class="news-list" id="newsList">
      {% for item in site.data.news %}
      <div class="news-item" {% if forloop.index > 5 %}style="display:none" data-hidden-news{% endif %}>
        <span class="news-date">{{ item.year }}</span>
        <span class="news-text">{{ item.text }}</span>
      </div>
      {% endfor %}
    </div>
    {% if site.data.news.size > 5 %}
    <button class="news-toggle" id="newsToggle" onclick="(function(){var h=document.querySelectorAll('[data-hidden-news]');var b=document.getElementById('newsToggle');if(b.dataset.open==='true'){h.forEach(function(e){e.style.display='none'});b.innerHTML='Show more &#9662;';b.dataset.open='false'}else{h.forEach(function(e){e.style.display=''});b.innerHTML='Show less &#9652;';b.dataset.open='true'}})()" data-open="false">Show more &#9662;</button>
    {% endif %}
  </div>
</section>


<!-- ===================== PUBLICATIONS ===================== -->
<!-- Driven by _data/publications.yml                         -->
<!-- To add a new paper, edit _data/publications.yml only      -->

<section class="section" id="publications">
  <div class="container">
    <div class="section-header pub-header-row">
      <h2>Publications</h2>
      <div class="scholar-inline" id="scholarMetrics"
           data-gs-citations="{{ site.data.profile.scholar_gs_citations }}"
           data-gs-hindex="{{ site.data.profile.scholar_gs_hindex }}"
           data-ss-citations="{{ site.data.profile.scholar_ss_citations }}"
           data-ss-hindex="{{ site.data.profile.scholar_ss_hindex }}">
        <div class="scholar-inline-chart">
          {% assign max_count = 0 %}
          {% for entry in site.data.profile.scholar_citations_per_year %}
            {% if entry.count > max_count %}{% assign max_count = entry.count %}{% endif %}
          {% endfor %}
          {% for entry in site.data.profile.scholar_citations_per_year %}
          <div class="si-bar-col" title="{{ entry.count }}">
            <div class="si-bar" style="height: {{ entry.count | times: 100 | divided_by: max_count }}%"></div>
            <span class="si-bar-year">{{ entry.year }}</span>
          </div>
          {% endfor %}
        </div>
        <div class="scholar-inline-nums">
          <div class="si-stat">
            <span class="si-num" id="metricCitations">{{ site.data.profile.scholar_gs_citations | append: "+" }}</span>
            <span class="si-label">citations</span>
          </div>
          <div class="si-stat">
            <span class="si-num" id="metricHIndex">{{ site.data.profile.scholar_gs_hindex }}</span>
            <span class="si-label">h-index</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pub-list" id="pubList">

{% assign by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% assign sorted = "" | split: "" %}
{% for grp in by_year %}{% for pub in grp.items %}{% assign sorted = sorted | push: pub %}{% endfor %}{% endfor %}
{% assign current_year = 0 %}
{% assign pub_index = 0 %}
{% for pub in sorted %}
{% if pub.year != current_year %}
{% assign current_year = pub.year %}
      <div class="pub-year-divider" data-pub-idx="{{ pub_index }}">{{ current_year }}</div>
{% endif %}

      <div class="pub-item" data-pub-idx="{{ pub_index }}">
        <div class="pub-thumb"><img src="{{ pub.icon | relative_url }}" alt="{{ pub.title | truncate: 20 }}"></div>
        <div class="pub-body">
          <span class="pub-venue-tag">{{ pub.venue }}</span>
          {% if pub.project_page %}
          <p class="pub-title"><a href="{{ '/publications/' | append: pub.project_page | append: '/' | relative_url }}"><strong>{{ pub.title }}</strong></a></p>
          {% elsif pub.external_project %}
          <p class="pub-title"><a href="{{ pub.external_project }}" target="_blank"><strong>{{ pub.title }}</strong></a></p>
          {% elsif pub.links and pub.links.size > 0 %}
          <p class="pub-title"><a href="{{ pub.links[0].url }}" target="_blank">{{ pub.title }}</a></p>
          {% else %}
          <p class="pub-title">{{ pub.title }}</p>
          {% endif %}
          <p class="pub-authors">{{ pub.authors }}</p>
          <p class="pub-desc">{{ pub.desc }}</p>
          <div class="pub-links">
            {% if pub.project_page %}<a href="{{ '/publications/' | append: pub.project_page | append: '/' | relative_url }}" class="pub-link-primary">Project Page</a>{% endif %}
            {% if pub.external_project %}<a href="{{ pub.external_project }}" target="_blank" class="pub-link-primary">Project Page</a>{% endif %}
            {% if pub.links %}{% for link in pub.links %}<a href="{{ link.url }}" target="_blank">{{ link.label }}</a>{% endfor %}{% endif %}
          </div>
        </div>
      </div>

{% assign pub_index = pub_index | plus: 1 %}
{% endfor %}

    </div>
    <div class="pub-pagination" id="pubPagination"></div>
    <p class="pub-scholar-link">Complete list of published works &#128073; <a href="https://scholar.google.com/citations?user=9lKxBUoAAAAJ&hl=en" target="_blank">Google Scholar</a></p>
  </div>
</section>

<script>
(function(){
  var PER_PAGE = 10;
  var items = document.querySelectorAll('#pubList [data-pub-idx]');
  var total = 0;
  items.forEach(function(el){
    var idx = parseInt(el.dataset.pubIdx);
    if(el.classList.contains('pub-item') && idx >= total) total = idx + 1;
  });
  var pages = Math.ceil(total / PER_PAGE);
  if(pages <= 1) return;
  var current = 0;

  function showPage(p){
    current = p;
    var start = p * PER_PAGE;
    var end = start + PER_PAGE;
    items.forEach(function(el){
      var idx = parseInt(el.dataset.pubIdx);
      if(el.classList.contains('pub-year-divider')){
        var show = false;
        var nextItems = document.querySelectorAll('.pub-item[data-pub-idx]');
        nextItems.forEach(function(ni){
          var ni_idx = parseInt(ni.dataset.pubIdx);
          if(ni_idx >= start && ni_idx < end){
            var prevs = [];
            var s = ni.previousElementSibling;
            while(s){
              if(s.classList.contains('pub-year-divider')){prevs.push(s); break;}
              s = s.previousElementSibling;
            }
            if(prevs.length && prevs[0] === el) show = true;
          }
        });
        el.style.display = show ? '' : 'none';
      } else {
        el.style.display = (idx >= start && idx < end) ? '' : 'none';
      }
    });
    renderPagination();
  }

  function renderPagination(){
    var cont = document.getElementById('pubPagination');
    var html = '<button class="pub-page-btn" ' + (current===0?'disabled':'') + ' onclick="window._pubPage(' + (current-1) + ')">&laquo;</button>';
    for(var i=0;i<pages;i++){
      html += '<button class="pub-page-btn' + (i===current?' active':'') + '" onclick="window._pubPage(' + i + ')">' + (i+1) + '</button>';
    }
    html += '<button class="pub-page-btn" ' + (current===pages-1?'disabled':'') + ' onclick="window._pubPage(' + (current+1) + ')">&raquo;</button>';
    cont.innerHTML = html;
  }

  window._pubPage = function(p){
    if(p < 0 || p >= pages) return;
    showPage(p);
    document.getElementById('publications').scrollIntoView({behavior:'smooth'});
  };

  showPage(0);
})();
</script>

<script>
(function(){
  var el = document.getElementById('scholarMetrics');
  var gsCit = parseFloat(el.dataset.gsCitations);
  var gsH = parseFloat(el.dataset.gsHindex);
  var ssCit = parseFloat(el.dataset.ssCitations);
  var ssH = parseFloat(el.dataset.ssHindex);
  var padCit = gsCit / ssCit;
  var padH = gsH / ssH;

  fetch('https://api.semanticscholar.org/graph/v1/author/40992763?fields=citationCount,hIndex')
    .then(function(r){ return r.json(); })
    .then(function(d){
      if(d.citationCount != null){
        var adjusted = Math.round(d.citationCount * padCit);
        document.getElementById('metricCitations').textContent = adjusted.toLocaleString() + '+';
      }
      if(d.hIndex != null){
        var adjusted = Math.round(d.hIndex * padH);
        document.getElementById('metricHIndex').textContent = adjusted;
      }
    })
    .catch(function(){});
})();
</script>


<!-- ============= RESEARCH PROJECTS =============== -->
<!-- Driven by _data/projects.yml                    -->

<section class="section section-alt" id="projects">
  <div class="container">
    <div class="section-header">
      <h2>Research Projects</h2>
      <p>{{ site.data.projects.headline }}</p>
    </div>
    <div class="projects-grid">
      {% for proj in site.data.projects.items %}
      <div class="project-card">
        <span class="status {{ proj.status }}">{{ proj.status | capitalize }}</span>
        <h3>{{ proj.title }}</h3>
        <p>{{ proj.description }}</p>
        <div class="project-card-links">
          {% if proj.project_page %}
          <a href="{{ '/projects/' | append: proj.project_page | append: '/' | relative_url }}">View Project</a>
          {% endif %}
          {% if proj.links %}
          {% for link in proj.links %}
          <a href="{{ link.url }}"{% if link.url contains '://' %} target="_blank"{% endif %}>{{ link.label }}</a>
          {% endfor %}
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
