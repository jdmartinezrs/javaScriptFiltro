export const getData = async () => {
    
        let res = await fetch("http:///abrigo");
        let data = await res.json();
        let dataUpdate = [];
        data.forEach(val => {
            dataUpdate.push({
                name: val.nombre,
            


            });



        });

    return dataUpdate;

};


export const getAllMoviesYear = async() =>{
    let res = await fetch("https://justwatch.imdbot.workers.dev/?q=Niram&L=en_IN")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            
            Realse: val.originalReleaseYear
            
        }
    })
    return dataUpdate;


}



