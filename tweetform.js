const form=document.getElementById("formtext")
form.addEventListener('submit',function(e)
{
    e.preventDefault();
     const text1=document.querySelector('#Username');
     const text2=document.querySelector('#Tweet');
     const bold=document.createElement('b');
     const tweeting=document.createElement('li');
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
    console.log(joke)
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