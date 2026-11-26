---
layout: default
title: Contact
---

<div class="page-content">
  <div class="container">
    <h1>Get in Touch</h1>
    <p class="contact-subtitle">Have a question, collaboration idea, or just want to say hello? Send me a message and I'll get back to you.</p>

    <form class="contact-form" action="https://formsubmit.co/nwoye.chinedu@gmail.com" method="POST" enctype="multipart/form-data">
      <input type="hidden" name="_subject" value="[WebContact] New message from your website">
      <input type="hidden" name="_next" value="{{ '/' | absolute_url }}contact?sent=true">
      <input type="hidden" name="_captcha" value="true">
      <input type="text" name="_honey" style="display:none">

      <div class="form-row">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required>
        </div>
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="What is this about?">
      </div>

      <div class="form-group">
        <label for="message">Message <span class="char-hint" id="charCount">0 / 500</span></label>
        <textarea id="message" name="message" rows="5" maxlength="500" placeholder="Keep it brief..." required></textarea>
      </div>

      <div class="form-group">
        <label for="attachment">Attachment <span class="char-hint">(optional, max 5 MB)</span></label>
        <input type="file" id="attachment" name="attachment" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.zip">
      </div>

      <button type="submit" class="form-submit">Send Message</button>
    </form>

  </div>
</div>

<script>
  if (window.location.search.includes('sent=true')) {
    var form = document.querySelector('.contact-form');
    form.innerHTML = '<div class="form-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3182ce" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg><h2>Message Sent!</h2><p>Thank you for reaching out. I\'ll get back to you soon.</p></div>';
  }
  // Character counter
  var msg = document.getElementById('message');
  var counter = document.getElementById('charCount');
  if (msg && counter) {
    msg.addEventListener('input', function() {
      var len = this.value.length;
      counter.textContent = len + ' / 500';
      counter.style.color = len > 450 ? '#e53e3e' : '';
    });
  }
  // File size check (5 MB)
  var file = document.getElementById('attachment');
  if (file) {
    file.addEventListener('change', function() {
      if (this.files[0] && this.files[0].size > 5 * 1024 * 1024) {
        alert('File exceeds 5 MB limit. Please choose a smaller file.');
        this.value = '';
      }
    });
  }
</script>
