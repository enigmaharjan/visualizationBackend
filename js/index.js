window.onload = async function(){
    //setting up the url
    const url = "http://localhost:4000/";

    //Checking for authorisation header
    if(localStorage.getItem('Token') == null){
        alert("You are not authorized.\nPlease Login First")
                        window.location.href = '/login';
      }

    //Getting the side pane element 
    const fee_sidePane = document.getElementById('fee_sidePane');
    const batch_sidePane = document.getElementById('batch_sidePane');
    const student_sidePane = document.getElementById('student_sidePane');
    const student_table = document.getElementById('student_details');

    fee_sidePane.innerText = "---"
    batch_sidePane.innerText = "---"
    student_sidePane.innerText = "---"

    let txt = '';
    txt += '<tr>'
    txt += '<td>No data</td>';
    txt += '<td>No data</td>';
    txt += '<td>No data</td>';
    txt += '<td>No data</td>';
    txt += '<td></td>';
    txt += '</tr>';
    student_table.innerHTML = txt;
    try {
        

        const allResponse = await Promise.all([
            fetch(url + "api/job/customers"),
            fetch(url + "api/job/sales"),
            fetch(url + "api/job/quantitysales"),
            fetch(url + "api/job/impsales")
            
        ])

        const feeRes = await allResponse[1].json();
        const totalcustomers = await allResponse[0].json();
        const quantityRes = await allResponse[2].json();
        const customers = await allResponse[3].json();

        //Checking JSON data
        



        //showing number of customers
        student_sidePane.innerText = totalcustomers.length

        //showing total amount to sidepane
        // let unPaidAmount = 0;
        // for (let amountCleared = 0; amountCleared < feeRes.length; amountCleared++) {
        //         unPaidAmount = Number(feeRes[amountCleared].AMOUNT_SOLD) + unPaidAmount;
        // }
        batch_sidePane.innerText = feeRes[0].amount;

        //showing total quantity to sidepane
        // let quantity = 0;
        // for (let newQuantity = 0; newQuantity < feeRes.length; newQuantity++) {
        //         quantity = Number(feeRes[newQuantity].QUANTITY_SOLD) + quantity;
        // }
        fee_sidePane.innerText = quantityRes[0].quantity;

        //For showing student details in table
        let txt = '';
        for (let x = 0; x < 10; x++) {
            txt += '<tr>'
            txt += '<td>' + Number(x + 1) + '</td>';
            txt += '<td>' + customers[x].CUST_FIRST_NAME + " "+ customers[x].CUST_LAST_NAME + '</td>';
            txt += '<td> $ ' + customers[x].amt + '</td>';
            txt += '<td>' + customers[x].CUST_MAIN_PHONE_NUMBER + '</td>';
            txt += '<td></td>';
            txt += '</tr>';
            student_table.innerHTML = txt;
        }
    }
    catch (err) {
        alert(err)
    }
    // const student_table = document.getElementById('student_details');
    // let txt = '';
    // txt += '<tr>'
    // txt += '<td>No data</td>';
    // txt += '<td>No data</td>';
    // txt += '<td>No data</td>';
    // txt += '<td>No data</td>';
    // txt += '<td></td>';
    // txt += '</tr>';
    // student_table.innerHTML = txt;
    // // try{
    // //     const data = await fetch(url + "api/job/customers");
    // //     const customers = await data[0].json();
    // //     let txt = '';
    // //     for (let x = 0; x < 11; x++) {
    // //         txt += '<tr>'
    // //         txt += '<td>' + Number(x + 1) + '</td>';
    // //         txt += '<td>' + customers[x].cust_first_name + " "+ customers[x].cust_last_name + '</td>';
    // //         txt += '<td>' + customers[x].cust_city + '</td>';
    // //         txt += '<td>' + customers[x].cust_main_phone_number + '</td>';
    // //         txt += '<td></td>';
    // //         txt += '</tr>';
    // //         student_table.innerHTML = txt;
    // //     }
    // // }
    // // catch(err){

    // // }
    // fetch(url + 'api/job/customers')
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(customers => {
    //         console.log(customers.length);
    //         txt = '';
            
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         alert(err)
    //     })
}