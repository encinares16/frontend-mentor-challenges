let facAccordion = document.getElementsByClassName("faq-accordion");

for (let i = 0; i < facAccordion.length; i++) {
  facAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let faqContent = this.nextElementSibling;
    faqContent.style.maxHeight ? faqContent.style.maxHeight = null : faqContent.style.maxHeight = faqContent.scrollHeight + "px"; 
  });
}


