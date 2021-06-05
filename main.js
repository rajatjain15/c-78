var image=[
    "img-2jpg",
    "img-3jpg",
    "img-4jpg",
    "img-5jpg",  
  ];
  var i=0;
  function next(){
    if(i==4)
      {i=0;}
  document.getElementById("aa").src=image[i];
  i++;
  }