import{getEmployeeSaleAgent,getEmployeesSales,getEmployByCode} from "./employees.js";
import{getPaymentsWithSales } from "./payments.js";
import{getOfficesByCode } from "./offices.js";

//6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllSpanishClientsNames = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let spanishClients = data.map(val =>{
        return{
            clientName: val.contact_name,
            clientLastName: val.contact_lastname,
            country: val.country 
        };
       
    });
    return spanishClients;
}  

//8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

export const getListClientsPayIn2008=async()=>{
    let res =await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdateSet = new Set(data.map(dev=>dev.client_code))
    let dataUpdate=[...dataUpdateSet]
    let paysinsandeight= Array.from(dataUpdate)
    return paysinsandeight
}


// 16. Devuelve un listado con todos los clientes que sean de la 
// ciudad de Madrid y cuyo representante de ventas tenga el código 
// de empleado 11 o 30.
export const getAllMadridClients=async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        if(val.code_employee_sales_manager==11||val.code_employee_sales_manager==30){
            dataUpdate.push(val)
        }
    })
    
    return dataUpdate;
}


/////////////////multitabla////////////////

//17. Devuelve un listado con el código de pedido, código de cliente, 
//fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getClientAndSaleAgentFullName = async() => {
    let resClients = await fetch ("http://localhost:5501/clients")
    let dataClients = await resClients.json();
    let dataUpdated = []

    // dataClients.forEach(async (val) => {
    //     let employees = await getEmployeeSaleAgent(val.code_employee_sales_manager);
    //     dataUpdated.push({
    //         nombre: val.client_name,
    //         nombre_manager: `${employees[0].name} ${employees[0].lastname1} ${employees[0].lastname2}`
    //     })
    // })
    // console.log(dataUpdated);

    for(let i = 0; i < dataClients.length; i++){
        let employees = await getEmployeeSaleAgent(dataClients[i].code_employee_sales_manager);
        console.log(i)
        dataUpdated.push({
            nombre: dataClient[i].clients_name,
            nombre_manager: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
        })
    }
    return dataUpdated;
}


// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientsWithSalesRepresentatives = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];


        let [pay] = await getPaymentsWithSales(client_code);

        
        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                client_code,
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate,
                ...paymentsUpdate
            };
            console.log(dataUpdate);
            dataUpdate.sales_mannager = `${name} ${lastname1} ${lastname2}`;
            clientsWithPayments.push(dataUpdate);
        }
    }
    return clientsWithPayments;
};


// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.


export const getClientsWithoutPayments = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

       
        let [pay] = await getPaymentsWithSales(client_code);

        
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let dataUpdate = {
                ...clientsUpdate,
                ...employUpdate
            };

            dataUpdate.sales_mannager = `${name} ${lastname1} ${lastname2}`;
            clientsWithoutPayments.push(dataUpdate);
        }
    }
    return clientsWithoutPayments;
};


// 4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.


export const getClientsWithPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

        let [pay] = await getPaymentsWithSales(client_code);

        if (pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let {
                code_client,
                payment: paymentClients,
                id_transaction: transactionClients,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = pay;

            let [office] = await getOfficesByCode(code_office);

            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...paymentsUpdate,
                    ...officeUpdate
                };

                dataUpdate.sales_manager = `${name} ${lastname1} ${lastname2}`;
                clientsWithPayments.push(dataUpdate);
            } 
        }
    }
    return clientsWithPayments;
};


// 5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientsWithoutPaymentsAndSalesRepresentativesAndOfficeCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    let clientsWithoutPayments = [];

    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            code_employee_sales_manager,
            ...clientsUpdate
        } = clients[i];

    
        let [pay] = await getPaymentsWithSales(client_code);

        
        if (!pay) {
            let [employ] = await getEmployeesSales(code_employee_sales_manager);
            let {
                extension,
                email,
                code_boss,
                position,
                id: idEmploy,
                name,
                lastname1,
                lastname2,
                code_office,
                employee_code,
                ...employUpdate
            } = employ;

            let [office] = await getOfficesByCode(code_office);
            if (office) {
                let {
                    country: countryOffice,
                    region: regionOffice,
                    postal_code: postal_codeOffice,
                    movil,
                    code_office,
                    address1: address1Office,
                    address2: address2Office,
                    id: idOffice,
                    ...officeUpdate
                } = office;

                let dataUpdate = {
                    ...clientsUpdate,
                    ...employUpdate,
                    ...officeUpdate
                };

                dataUpdate.sales_manager = `${name} ${lastname1} ${lastname2}`;
                clientsWithoutPayments.push(dataUpdate);
            }
        }
    }
    return clientsWithoutPayments;
};


export const getClientsFromFuenlabrada = async (code) => {
    let res = await fetch(`http://localhost:5501/clients?city=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsEmploy = async() =>{
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    // [
    //     {
    //         city: "San Francisco"
    //         client_name : "GoldFish Garden"
    //         name_employee: "Walter Santiago Sanchez Lopez"
    //     }
    // ]
    return clients;
}
// 13 Devuelve un listado con todos los pagos que se realizaron en el 
// año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaymentsFromPayPalEachYear = async() =>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let { date_payment } = val 
        let [year] =  date_payment.split("-")
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateA-dateB  ;
    });
    let payFromEachYear = Array.from(dataUpdate)
    return payFromEachYear
}

//14. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago.
//Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getAllPaymentMethods = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate =  new Set();
    data.forEach(val=>{
        dataUpdate.add(
            val.payment
        )
    })
    let payWays= Array.from(dataUpdate)
    return payWays
}

// Consultas multitabla (Composición interna)

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.


//Obtener el pago de algun cliente mediante codigo
export const getAllPaymentByClientCode = async (code ="") =>{
    let res = await fetch(`http://localhost:5507/payments?code_client=${code}`);
    let data = await res.json();
    return data;
}


export const getPaymentsWithSales = async (code) => {
    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`);
    let dataClients = await res.json();
    return dataClients;
}



// 3. Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            
            fullname: `${val.name} ${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0],
            codigodeljefe: val.code_boss
        }
    })
    return dataUpdate;
}

// 4. Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://localhost:5502/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                
                fullname: `${val.name}     ${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
            })
        }
    })
    return dataUpdate
}
//5. Devuelve un listado con el nombre, apellidos y puesto de aquellos 
// empleados que no sean representantes de ventas.
export const getAllFullnamePositionDiferentSalesRepresentative = async()=>{
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante Ventas")
    let data = await res.json();
    let dataUpdata = []
    data.forEach(val => {
        if(val.code_boss != null){
            dataUpdata.push({
                fullname:`${val.name}${val.lastname1}${val.lastname2}`,
                position: val.position,
            })
        }
    });
    return dataUpdata;
}


// Obtener toda la informacion del empleado por codigo
export const getEmployeeSaleAgent= async(code)=>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let data = await res.json()
    return data
}



export const getEmployeesSales = async (code) => {
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 8.Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getEmployeesWithBossesAndBossesOfBosses = async () => {
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let { code_boss, name, lastname1, lastname2 } = dataEmployees[i];
        let bossName = null;
        if (code_boss) {
            let [boss] = await getEmployByCode(code_boss);
            if (boss) {
                bossName = boss.name; // Almacena el nombre del jefe
            }
        }
        dataEmployees[i] = { name, lastname1, lastname2, boss: bossName };
    }
    return dataEmployees;
};



export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}
export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employees`);
    let data = await res.json();
    return data;
}






