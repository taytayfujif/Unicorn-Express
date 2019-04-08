function showData(){
    axios 
    .get('https://su0jijc0e6.execute-api.us-east-1.amazonaws.com/dev/search', {

    })
   .then(response =>{
       console.log('response', response);
    response.data.message.rows.map(t =>{
       console.log(
           t.id,
           t.section,
           t.sub_section,
           t.sub_suba,
           t.sub_subb,
           t.sub_subc,
           t.sub_subd
       )
        })
      })
   .catch(e => {
       console.log('error', e);
   })
}
showData();