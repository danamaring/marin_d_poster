(() => {
    //try to get the bject and do stuff with it
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');


    function buildPopover(netflixdata, el) {
        popOver.querySelector(".movie-name").textContent = netflixdata.Movie;
        popOver.querySelector(".tomatometer").textContent = `TOMATOMETER: ${netflixdata.Tomatometer}`;
        popOver.querySelector(".audience-score").textContent = `AUDIENCE SCORE: ${netflixdata.AudienceScore}`;
        popOver.querySelector(".critics-consensus").textContent = `CRITICS CONSENSUS: ${netflixdata.CriticsConsensus}`;

        //show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);
    }

    function fetchData() {
        let targetEl = this,
            url = `/netdata/${this.dataset.target}`; 
        
        fetch(url)
        .then (res => res.json())
        .then(data => {
            console.log(data);

            // populate the popover
            buildPopover(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    seeMoreButtons.forEach(button => button.addEventListener("mouseover", fetchData));
})();