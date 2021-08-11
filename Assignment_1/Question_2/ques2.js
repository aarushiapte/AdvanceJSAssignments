const fetch = require('cross-fetch');

const api_call = async (url) => {
    try {
        const res = await fetch(url);
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        else{
            return res.json()
        }
    }
    catch (error) {
        console.log(error.message);
      }
}

const ans = async (input) => {
    const data = await api_call(`https://api.github.com/search/repositories?q=${input}`)
    let results = []
    for(let item of data.items){
        const result = {
            'name':item['name'],
            'full_name':item.full_name,
            'private':item.private,
            // 'owner':{
            //     'login':item.owner.login,
            //     'name':api_call(item.owner.url)['name'],
            //     'followersCount':api_call(item.owner.followers_url).length,      
            //     'followingCount':api_call(item.owner.following_url).length,
            //         },
            //bad serever res-- api limitation
            'licenseName':item.license,        
            'score':item.score,
            //'numberOfBranches':api_call(item.branches_url).length
            }
        results.push(result)
    }
    console.log(results)
}
ans('angular') 