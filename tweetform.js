const form=document.getElementById("formtext")
form.addEventListener('submit',function(e)
{
    e.preventDefault();
     const text1=document.querySelector('#Username');
     const text2=document.querySelector('#tweet');
     const bold=document.createElement('b');
     const tweeting=document.createElement('li');
     tweeting.style.borderBottom ="2px solid red";
     const tweets=document.querySelector('#tweet_display')
     bold.append('@'+text1.value+':    ');
     tweeting.append(bold);
     tweeting.append(text2.value);
     if(text1.value!=''&& text2.value!='')
        tweets.append(tweeting);
     text1.value='';
     text2.value='';
});
function jokeAdd(joke)
{
    const ul=document.getElementById('tweet_display');
    const li=document.createElement('li');
    const bold=document.createElement('b');
    bold.append('@randonJoke:    ');
    li.append(bold);
    li.append(`${joke}`);
    ul.append(li);
}
async function dadJoke()
{
   	var config = {headers:{Accept: 'application/json'}};
   	var res = await axios.get('https://icanhazdadjoke.com/',config);
   	jokeAdd(res.data.joke)
}
const formjoke=document.getElementById("form");
formjoke.addEventListener('submit',function(e){
    e.preventDefault();
    dadJoke();
})
var el;                                                    
function countCharacters(e) {                                    
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('tweet').value;  
  counter = (144 - (textEntered.length));
  countRemaining = document.getElementById('charactersRemaining'); 
  countRemaining.textContent = `You have ${counter} characters left`; 
  if(counter<0)
  {  
     document.getElementById("tweetPoster").disabled = true;
     counter=0;
  }
  if(counter>=0)
  {
   document.getElementById("tweetPoster").disabled = false;
  }
}
el = document.getElementById('tweet');                   
el.addEventListener('keyup', countCharacters);