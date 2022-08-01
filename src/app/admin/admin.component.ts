import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  json = [ 'number : 45', {
    title : 'menu',
    name : 'user',
    subntitle : [
        {
          submenu : 'hhhhhh',
          
          
        }
    ]
  }, 
    
  ]
  data = {
    "statusCode":200,
    "body":"9236166",
    "headers":{
       "cache-control":"private",
       "content-type":"text/html",
       "server":"Microsoft-IIS/8.5",
       "set-cookie":[
          "ASPSESSIONIDQWQQASBR=OKNFPKOACBGADALICJHKDELN; secure; path=/"
       ],
       "x-powered-by":"ASP.NET",
       "date":"Thu, 28 Jul 2022 09:42:39 GMT",
       "connection":"close",
       "content-length":"7"
    },
    "request":{
       "uri":{
          "protocol":"https:",
          "slashes":true,
          "auth":null,
          "host":"sms.tivre.com",
          "port":443,
          "hostname":"sms.tivre.com",
          "hash":null,
          "search":"?userid=otp@propyoda.com&password=PropYod@!23&msg=%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Verification%20Link%20Sms%0A%20%20%20%20%20%20%20%20&mobnum=00917987934995&frommobilenoGSM=PRPYDA&TivreID=1",
          "query":"userid=otp@propyoda.com&password=PropYod@!23&msg=%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Verification%20Link%20Sms%0A%20%20%20%20%20%20%20%20&mobnum=00917987934995&frommobilenoGSM=PRPYDA&TivreID=1",
          "pathname":"/httppush/send_smsSch.asp",
          "path":"/httppush/send_smsSch.asp?userid=otp@propyoda.com&password=PropYod@!23&msg=%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Verification%20Link%20Sms%0A%20%20%20%20%20%20%20%20&mobnum=00917987934995&frommobilenoGSM=PRPYDA&TivreID=1",
          "href":"https://sms.tivre.com/httppush/send_smsSch.asp?userid=otp@propyoda.com&password=PropYod@!23&msg=%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20Verification%20Link%20Sms%0A%20%20%20%20%20%20%20%20&mobnum=00917987934995&frommobilenoGSM=PRPYDA&TivreID=1"
       },
       "method":"GET",
       "headers":{
       }
    }
 }
  hello = "Mobile No|MsgId|TIVRE ID|Send Date|Delivery Date|Status#00917987934995|0|9237530|7/28/2022 7:25:00 PM|7/28/2022 7:25:00 PM|delivrd #"
  constructor() { 
   
  
  }

  
  ngOnInit(): void {
    var list = this.hello.split("#")
    console.log( list );
    
    let y = list.splice(1);
    // console.log(list),
    // console.log(y);
    
    
    var objA = list.toString()

    var strA = objA.split("|")

    var objB = y.toString()

    var strB = objB.split("|")
    console.log(';^^^^^^^^^',strB)

    const obj : any = {} ;

    strA.forEach((element, index) => {
     obj[element] = strB[index];
    });
   console.log(obj)
    obj['Delivery Date'] = new Date();
    obj[`Send Date`] = new Date();
   console.log("********",obj)
  }
  

}
