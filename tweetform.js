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
     if(text1.value!=''&&text2.value!='')
        tweets.append(tweeting);
     text1.value='';
     text2.value='';
});