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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            {% when 'github' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {% when 'linkedin' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {% when 'twitter' %}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
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
    <div class="news-list">
      {% for item in site.data.news %}
      <div class="news-item">
        <span class="news-date">{{ item.year }}</span>
        <span class="news-text">{{ item.text }}</span>
      </div>
      {% endfor %}
    </div>
  </div>
</section>


<!-- ===================== PUBLICATIONS ===================== -->
<!-- Driven by _data/publications.yml                         -->
<!-- To add a new paper, edit _data/publications.yml only      -->

<section class="section" id="publications">
  <div class="container">
    <div class="section-header">
      <h2>Publications</h2>
      <p>Complete list of published works &middot; <a href="https://scholar.google.com/citations?user=9lKxBUoAAAAJ&hl=en" target="_blank">Google Scholar</a></p>
    </div>
    <div class="pub-list">

{% assign sorted = site.data.publications | sort: "year" | reverse %}
{% assign current_year = 0 %}
{% for pub in sorted %}
{% if pub.year != current_year %}
{% assign current_year = pub.year %}
      <div class="pub-year-divider">{{ current_year }}</div>
{% endif %}

      <div class="pub-item">
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

{% endfor %}

    </div>
  </div>
</section>


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
        {% if proj.links and proj.links.size > 0 %}
        <div class="project-card-links">
          {% for link in proj.links %}
          <a href="{{ link.url }}"{% if link.url contains '://' %} target="_blank"{% endif %}>{{ link.label }}</a>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>
