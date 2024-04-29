$(document).ready(function(){
    const endpoint = `https://api.github.com/users/luisflipefv`;
    const avatar = $('#avatar');
    const name = $('#name');
    const username = $('#username');
    const repositories = $('#repositories');
    const followers = $('#followers');
    const following = $('#following');
    const github = $('#btn-github');

    fetch(endpoint)
    .then(function (resposta){
        console.log(resposta);
        return resposta.json();
        
    })
    .then(function(json){
        avatar.attr('src', json.avatar_url);
        name.text(json.name);
        username.text(json.login);
        repositories.text(json.public_repos);
        followers.text(json.followers);
        following.text(json.following);
        github.attr('href', json.html_url);
    })
})