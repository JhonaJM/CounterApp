const apiKey="zMyN4q11jDGRIbdt4tzmXKqMcQPg5Giu";
 const petitcion=fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
 
 //promesas encadenadas
 petitcion
    .then(resp=>resp.json())
    //desestructuracion de data
    .then( ({data}) => { 
      //const {url}=data.map(x=>console.log(x.url));
      const {url}=data[0];
      console.log(url); 
      const img=document.createElement('img');
      img.src=url;
      document.body.append(img);
    })
    .catch(console.warn)