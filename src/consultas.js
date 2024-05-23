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