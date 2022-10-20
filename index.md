---
layout: default
---
# Research
> I'm interested in computer vision, machine learning, optimization, and image processing. 
Much of my research is about the use of these AI method for the analysis and modeling of surgical activities using real endoscopic videos. 
Representative papers are highlighted.



## Selected publications
<table>
  <tr>
    <td colspan=2 style="color:blue"><b>Weakly Supervised Convolutional LSTM Approach for Tool Tracking in Laparoscopic Videos</b></td>
  </tr>
  <tr>
    <td style="padding:2.5%;width:25%;vertical-align:middle;min-width:120px">
        <img src="assets/img/ipcai2019.gif" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td>
      <i style="font-size:75%; color:purple">CI. Nwoye, D. Mutter, J. Marescaux, N. Padoy</i><br /> 
      <span style="font-size:80%">
        "A deep learning method for surgical tool tracking trained on tool binary presence labels only. 
        It exploit temporal information in laparoscopic videos using convolutional LSTM. 
        The model achieved a state-of-the-art performance on tool detection, localization and tracking for weakly supervised models."
      </span><br>
      <span style="font-size:30%: color:dark-blue"><b>IPCAI 2019 (Oral presentation, Audience choice award: Best presentation (First prize)</b></span> <br>
      <span style="font-size:65%">
        <a href="https://link.springer.com/article/10.1007/s11548-019-01958-6">journal</a> /
        <a href="https://arxiv.org/abs/1812.01366">arXiv</a> / 
        <a href="https://youtu.be/vnMwlS5tvHE">video 1</a> /  
        <a href="https://youtu.be/SNhd1yzOe50">video 2</a> / 
        <a href="#">poster</a> / 
        <a href="#">supplement</a> / 
        <a href="https://github.com/CAMMA-public/ConvLSTM-Surgical-Tool-Tracker">code</a> / 
        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:CweYMKcUKesJ:scholar.google.com/&output=citation&scisdr=CgVAT2hXEOS4tci6tek:AAGBfm0AAAAAY1G8rem5lpW_N2pYmU0J2PqD_-QplUgI&scisig=AAGBfm0AAAAAY1G8rR6pMAYq25cZ2OGGW-Eiu_Fu8lXq&scisf=4&ct=citation&cd=-1&hl=en">bibtex</a> 
      </span>
    </td>
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
