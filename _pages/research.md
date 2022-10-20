
---
layout: default
---
# Research



I'm interested in computer vision, machine learning, optimization, and image processing. 
Much of my research is about the use of these AI method for the analysis and modeling of surgical activities using real endoscopic videos. 
Representative papers are highlighted.

## Selected publications

<table>
  <tr>
    <td>Me</td><td>You</td>
  </tr>
</table>

1. Weakly supervised learning
2. Attention Mechanism




        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">

          {% for post in site.posts %}
          {% for cat in post.categories %}
          {% if cat == 'research' %}
          <tr>
            <td style="padding:2.5%;width:25%;vertical-align:middle;min-width:120px">
              <img src="/tn{{post.image}}" alt="project image" style="width:auto; height:auto; max-width:100%;" />
            </td>
            <td style="padding:2.5%;width:75%;vertical-align:middle">
              <h3>{{post.title}}</h3>
              <br>
              {{post.authors}}

              <br>
              <em>{{post.venue}}</em>, {{ post.date | date: "%Y" }}
              <br>
              {% if post.arxiv %}
              <a href="{{post.arxiv}}">arxiv</a> /
              {% endif %}
              {% if post.video %}
              <a href="{{post.video}}">video</a> /
              {% endif %}
              {% if post.code %}
              <a href="{{post.code}}">code</a> /
              {% endif %}
              {% if post.poster %}
              <a href="{{post.poster}}">poster</a> /
              {% endif %}
              {% if post.slides %}
              <a href="{{post.slides}}">slides</a> /
              {% endif %}
              <p></p>
              {{ post.excerpt }}
            </td>
          </tr>
          {% endif %}
          {% endfor %}
          {% endfor %}
        </table>
        <br>
