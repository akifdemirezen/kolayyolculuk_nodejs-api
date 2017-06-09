var restify = require('restify');
var bodyParser= require('body-parser')
var express=require('express')
 var request = 	require('request');
var app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



app.post('/kullanicisecimi', function(req, res, next) {

var sonhali;
var obje = new Array();
var liste=[];
  
  var from=req.body.from;
  var to=req.body.to;
  var departureDate= req.body.departureDate;
  var returnDate= req.body.returnDate;



    request(
		{
            port:6001,
			method:'POST',
			uri:'https://candidate.kolayyolculuk.com/dev',
			headers: {
				"content-type": "application/json"
			},
			json: true,
			body:{
				'from':from,
				'to': to,
				'departureDate':departureDate,
                'returnDate':returnDate
			}
		},

		function(error, response, body) {

       try {
  const m = 1;
  const n = m + z;

         

			if(!body.errors){
var flights_gidis_liste=new Array();
var flights_donus_liste=new Array();

for(var z=0;z<3;z++){

flights_gidis_liste.push(body.flights[0][z].order.toString());
flights_donus_liste.push(body.flights[1][z].order.toString());

}


for(var k=0;k<9;k++){

// var orders_arr = body.connections[k].orders.toString().split(",");

	var orders_arr = body.connections[k].orders.toString().split(",");
	// orders_arr[0]  ve orders[1] in fligthstaki kontollerini yap onu al

//Flights listesinin hangi indexinde eşit Hangisinde eşit

   
     var gidis_index=flights_gidis_liste.indexOf(orders_arr[0]); // gidiş uçuşu kaçıncı indexte orderla eşit
	 var donus_index=flights_donus_liste.indexOf(orders_arr[1]);  // dönüş uçuşu kaçıncı indexte orderla eşit
  var departure = body.flights[0][gidis_index].airline+" "+body.flights[0][gidis_index].number.toString(); // gidişler
  var returned = body.flights[1][donus_index].airline+" "+body.flights[1][donus_index].number.toString();   // dönüşler	


    
      var order_price=body.connections[k].price;
	  var gidis_donus_fiyat = body.flights[0][gidis_index].price+body.flights[1][donus_index].price; //ayrı ayrı fiyatlar
    
  var saving = gidis_donus_fiyat-order_price;
   var son_saving = Math.round(saving*1)/1;  // gidiş dönüş biletteki kazanç 
  var son_order_price = Math.round(order_price*100)/100;  // son fiyat  sonu 2 haneli

//Gönderilecek yapıyı oluşturma
obje[k]=
 
[ {
    
      "departure":departure,
      "return":returned,
      "price":son_order_price,
      "savings":son_saving 


}]

liste.push(obje[k]);


}// orders for kapanış

var sonhal;

// listeyi daha sonra fora sokup ekleme yap şimdilik deneme

sonhal=liste[0].concat(liste[1]).concat(liste[2]).concat(liste[3]).concat(liste[4]).concat(liste[5]).concat(liste[6]).concat(liste[7]).concat(liste[8]);

 var Json_gonderilecek = { flights:sonhal};

 
res.send(Json_gonderilecek);


	} else{
	
    
			}//try parantez
			} catch (err) {
  for(var e=0;e<3;e++){

   return res.send(500,{error:'Validasyon Hatası'});
  
  }

}    
		}
	);// request kapanış


});
app.listen(6001)
 