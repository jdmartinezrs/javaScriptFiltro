

export const getAllMoviesYear = async() =>{
    let res = await fetch("https://justwatch.imdbot.workers.dev/?q=Niram&L=en_IN")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach (val => {dataUpdate.push({
        dateRealse: val.originalReleaseYear,
         name: val.title
        
    })});
    return dataUpdate;
     
        
}
