---
layout: default
---
# Research
```
I'm interested in computer vision, machine learning, optimization, and image processing. 
Much of my research is about the use of these AI method for the analysis and modeling of surgical activities using real endoscopic videos. 
Representative papers are highlighted.
```


## Selected publications
<table>
  <tr>
    <td style="padding:2.5%;width:25%;vertical-align:middle;min-width:120px">
        <img src="assets/img/ipcai2019.gif" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td>
      <b>Weakly Supervised Convolutional LSTM Approach for Tool Tracking in Laparoscopic Videos</b><br />
      <span style="font-size:50%">CI. Nwoye, D. Mutter, J. Marescaux, N. Padoy</span><br>
      <span style="font-size:70%">
        A deep learning method for surgical tool tracking trained on tool binary presence labels only. 
        It exploit temporal information in laparoscopic videos using convolutional LSTM. 
        The model achieved a state-of-the-art performance on tool detection, localization and tracking for weakly supervised models.
      </span><br>
      <span style="font-size:20%">
        <a href="">project page</a> 
        <a href="">arXiv</a> 
        <a href="">video</a> 
        <a href="">poster</a> 
        <a href="">supplement</a> 
        <a href="">code</a> 
        <a href="">bibtex</a> 
      </span>
    </td><td>You</td>
  </tr>
  
</table>





<!-- 
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
        <br> -->
