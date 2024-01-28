let cl=console.log;

let result=``;

let TMDB= document.getElementById("TMDB");

 movieArray.forEach(data=>{
	
	result+=`<div class="col-md-4">
		  <div class="card movieCard mb-0">
		     <figure>
			    <img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="">
				<figcaption>
				   <div class="ratingSection">
				      <div class="row">
					     <div class="col-10">
                             <h3>${data.original_title}</h3>
						 </div> 
					     <div class="col-2">
						     <span>${data.vote_average}</span>
						 </div>
					  </div>
				   </div>
				   <div class="overviewSection">
				        <h4>
						   overview
						</h4>
						<em>overview</em>
						<p>
						 ${data.overview}
						 </p>
				   
				   </div> 
				</figcaption>
			 </figure>
		  </div>
		</div>`
		
})

 TMDB.innerHTML = result;
