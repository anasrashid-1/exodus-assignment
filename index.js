const handleShowMore = (event) => {
   const showMoreTextSpan = document.getElementById('show-more-text');
   if(event.target.textContent == "Show More 🠻"){ 
    showMoreTextSpan.style.display = "inline"
    event.target.textContent = "Show Less 🠹";
   }
   else if(event.target.textContent == "Show Less 🠹"){ 
    showMoreTextSpan.style.display = "none"
    event.target.textContent = "Show More 🠻";
   }
}

