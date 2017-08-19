var pageCounter = 1

var animalContainer = document.getElementById('animal-info')

var btn = document.getElementById("btn")

btn.addEventListener("click", function(){

var ourRequest = new XMLHttpRequest();
	
	ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
	
	ourRequest.onload = function(){
		
		var ourData = JSON.parse(ourRequest.responseText)
		// console.log(ourRequest.responseText)
		// console.log(ourData[0])
		renderHtml(ourData)
		};

	ourRequest.send();
	pageCounter ++;
	if (pageCounter >3 ){
		$("#btn").css("display","none")

	}
})


function renderHtml(data){
	var htmlString = ''

	for (var i = 0; i < data.length ; i++){
		htmlString +=  '<p>' + data[i].name + 'is a ' + data[i].species +' that likes to eat ' 
		for(var ii = 0; ii < data[i].foods.likes.length; ii++){
			if(ii === 0){
				htmlString +=  data[i].foods.likes[ii]
			}else{
				htmlString += " and "+ data[i].foods.likes[ii]
			}
			
		}

		htmlString += ' and dislikes ';

		for(var j = 0; j < data[i].foods.dislikes.length; j++){
			if(j === 0){
				htmlString +=  data[i].foods.dislikes[j]
			}else{
				htmlString += " and "+ data[i].foods.dislikes[j]
			}
			
		}

		htmlString += '.</p>';
	}

	animalContainer.insertAdjacentHTML('beforeend',htmlString)
}


