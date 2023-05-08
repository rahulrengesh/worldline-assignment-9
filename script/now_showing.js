function searchMovies() {
    const searchQuery = document.querySelector('#searchInput').value.trim();
    const matchingCard = document.getElementById(searchQuery);

    if (matchingCard) {
        
        matchingCard.style.order = -1;

        
        const allCards = document.querySelectorAll('.ui-card');
        allCards.forEach(card => {
            if (card !== matchingCard) {
                card.style.display = 'none';
            } else {
                card.style.display = 'block';
                var parentElement = card.parentNode;
                var parentId = parentElement.id;
                if(parentId==="genre-action")
                {
                    card.style.position="relative";
                    card.style.bottom="680px";
                    console.log("action");
                }
                else if(parentId==="genre-drama")
                {
                    card.style.position="relative";
                    card.style.bottom="1430px";
                    console.log("drama");
                }

            }
        });
    } else {
        
        const allCards = document.querySelectorAll('.ui-card');
        var nor=document.getElementById("nores");
        allCards.forEach(card => {
            card.style.display = 'none';
            card.style.order = 0;
            nor.style.display='block';

        });
    }
   
}
function filterMovies() {
  var genreSelect = document.getElementById("genre-select");
  var selectedGenre = genreSelect.value;
  
  var rows = document.getElementsByClassName("row");
  var sub= document.getElementsByClassName("subtitle");

  for (var i = 0; i < rows.length; i++) {
    if (rows[i].id === selectedGenre) {
      rows[i].style.display = "flex";
      sub[i].style.display="none";
      
    } else {
      rows[i].style.display = "none";
      sub[i].style.display="none";
    }

  }
  if(selectedGenre==="genre-action")
    {
        
        var ga=document.getElementById("genre-action");
        var gf=document.getElementById("genre-filter");
        var f1=document.getElementById("filter-1");
        var si=document.getElementById("searchInput");
        var sb=document.getElementById("searchButton");
        ga.style.position="relative";
        ga.style.top="70px";
        gf.style.display="none";
        si.style.display="none";
        sb.style.display="none";
        f1.style.display="block";
        console.log("action");
    }
    else if(selectedGenre==="genre-drama")
    {
        var gd=document.getElementById("genre-drama");
        var gf=document.getElementById("genre-filter");
        var f1=document.getElementById("filter-1");
        var si=document.getElementById("searchInput");
        var sb=document.getElementById("searchButton");
        gd.style.position="relative";
        gd.style.top="70px";
        si.style.display="none";
        gf.style.display="none";
        sb.style.display="none";
        f1.style.display="block";
        console.log("drama");
    }
    else if(selectedGenre==="genre-thriller")
    {
        var gt=document.getElementById("genre-thriller");
        var gf=document.getElementById("genre-filter");
        var f1=document.getElementById("filter-1");
        var si=document.getElementById("searchInput");
        var sb=document.getElementById("searchButton");
        gt.style.position="relative";
        gt.style.top="70px";
        si.style.display="none";
        gf.style.display="none";
        sb.style.display="none";
        f1.style.display="block";
        console.log("thriller");
    }
}
function refreshPage() {
  location.reload();
}
