---
layout: default
---
# Research
> I'm interested in computer vision, machine learning, optimization, and image processing. 
Much of my research is about the use of these AI method for the analysis and modeling of surgical activities using real endoscopic videos. 
Representative papers are highlighted.



## Selected publications
<table>
  <!--- paper 3 -->
  <tr>
    <td colspan=2 style="color:blue"><b>Rendezvous: Attention Mechanisms for the Recognition of Surgical Action Triplets in Endoscopic Videos</b></td>
  </tr>
  <tr>
    <td style="padding:2.5%;width:25%;vertical-align:middle;min-width:120px">
        <img src="assets/img/media2022.png" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td>
      <i style="font-size:75%; color:purple">C.I. Nwoye, T. Yu, C. Gonzalez, B. Seeliger, P. Mascagni, D. Mutter, J. Marescaux, and N. Padoy</i><br /> 
      <span style="font-size:80%">
        A transformer-inspired neural network that detects surgical action triplets directly from surgical videos by leveraging attention at two different levels: 
        (1) spatial attention to capture individual action triplet components in a scene; called Class Activation Guided Attention Mechanism (CAGAM), and 
        (2) semantic attention to resolve the relationships between instruments, verbs, and targets leveraging self and cross attention mechanisms; 
        this is called Multi-Head of Mixed Attention (MHMA).
      </span><br>
      <b style="font-size:20%: color:dark-blue">Medical Image Analysis 2022 (IF: 8.545)</b>      
    </td>
  </tr>
  <tr>
    <td colspan=2 style="color:blue">
      <span style="font-size:75%">
        <a href="https://doi.org/10.1016/j.media.2022.102433">journal</a> /
        <a href="https://arxiv.org/abs/2109.03223">arXiv</a> / 
        <a href="https://www.youtube.com/watch?v=d_yHdJtCa98&t=61s">video</a> /
        <a href="https://ars.els-cdn.com/content/image/1-s2.0-S1361841522000846-ga1.jpg">poster</a> / 
        <a href="https://ars.els-cdn.com/content/image/1-s2.0-S1361841522000846-mmc1.pdf">supplement</a> / 
        <a href="https://github.com/CAMMA-public/rendezvous">code</a> / 
        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:NvIar7XwfCEJ:scholar.google.com/&output=citation&scisdr=CgVAT2hXEOS4tcjKXjw:AAGBfm0AAAAAY1HMRjw1Vj8y99GIlCuK4Y487-0VkR7j&scisig=AAGBfm0AAAAAY1HMRu-hHlghtvoQXt99SSsSyJSB-yI8&scisf=4&ct=citation&cd=-1&hl=en">bibtex</a> 
      </span><p><br /></p>
    </td>
  </tr>
  
  
  <!--- paper 2 -->
  <tr>
    <td colspan=2 style="color:blue"><b>Recognition of instrument-tissue interactions in endoscopic videos via action triplets</b></td>
  </tr>
  <tr>
    <td style="padding:2.5%;width:25%;vertical-align:middle;min-width:120px">
        <img src="assets/img/miccai2020.png" alt="project image" style="width:auto; height:auto; max-width:100%;" />
    </td>
    <td>
      <i style="font-size:75%; color:purple">CI Nwoye, C Gonzalez, T Yu, P Mascagni, D Mutter, J Marescaux, and N Padoy</i><br /> 
      <span style="font-size:80%">
        First research to tackle the recognition of surgical fine-grained activities modeled as action triplets (instrument, verb, target). 
        Led to the creation of first triplet dataset, CholecT40.
        Followed by the development of Tripnet: first deep learning method to recognize these triplets directly from the video data leveraging two novel modules, 
        class activation guide (CAG) and 3D interaction space (3Dis), for respectively capturing the individual components of triplet and resolving their association as triplets.        
      </span><br>
      <b style="font-size:20%: color:dark-blue">MICCAI 2022 (Oral presentation)</b>      
    </td>
  </tr>
  <tr>
    <td colspan=2 style="color:blue">
      <span style="font-size:75%">
        <a href="https://link.springer.com/chapter/10.1007/978-3-030-59716-0_35">journal</a> /
        <a href="https://arxiv.org/abs/2007.05405">arXiv</a> / 
        <a href="https://youtu.be/vnMwlS5tvHE">video 1</a> /  
        <a href="https://youtu.be/SNhd1yzOe50">video 2</a> / 
        <a href="#">poster</a> / 
        <a href="#">supplement</a> / 
        <a href="https://github.com/CAMMA-public/tripnet">code</a> / 
        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:ZZm_AZpFBVkJ:scholar.google.com/&output=citation&scisdr=CgVAT2hXEOS4tcjIyig:AAGBfm0AAAAAY1HO0ihWUeoZS9wMI9kqhDsAxPhc9m7e&scisig=AAGBfm0AAAAAY1HO0tbsKCBz_ahuqJJjchZZFscqaly0&scisf=4&ct=citation&cd=-1&hl=en">bibtex</a> 
      </span><p><br /></p>
    </td>
  </tr>
  
  
  <!--- paper 1 -->
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
        A deep learning method for surgical tool tracking trained on tool binary presence labels only. 
        It exploit temporal information in laparoscopic videos using convolutional LSTM. 
        The model achieved a state-of-the-art performance on tool detection, localization and tracking for weakly supervised models...
      </span><br>
      <b style="font-size:20%: color:dark-blue">IPCAI 2019 (Oral presentation, Audience choice award: Best presentation (First prize)</b>      
    </td>
  </tr>
  <tr>
    <td colspan=2 style="color:blue">
      <span style="font-size:75%">
        <a href="https://link.springer.com/article/10.1007/s11548-019-01958-6">journal</a> /
        <a href="https://arxiv.org/abs/1812.01366">arXiv</a> / 
        <a href="https://youtu.be/vnMwlS5tvHE">video 1</a> /  
        <a href="https://youtu.be/SNhd1yzOe50">video 2</a> / 
        <a href="#">poster</a> / 
        <a href="#">supplement</a> / 
        <a href="https://github.com/CAMMA-public/ConvLSTM-Surgical-Tool-Tracker">code</a> / 
        <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:CweYMKcUKesJ:scholar.google.com/&output=citation&scisdr=CgVAT2hXEOS4tci6tek:AAGBfm0AAAAAY1G8rem5lpW_N2pYmU0J2PqD_-QplUgI&scisig=AAGBfm0AAAAAY1G8rR6pMAYq25cZ2OGGW-Eiu_Fu8lXq&scisf=4&ct=citation&cd=-1&hl=en">bibtex</a> 
      </span><p><br /></p>
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
