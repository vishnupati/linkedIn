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
  
  constructor() { 
    this.data  = JSON.parse(JSON.stringify(this.data).replace(/\:null/gi, "\:\"\"")); 
    const myJson = JSON.stringify(this.json)
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
