const checksum_lib = require('../paytm/checksum/checksum')
exports.paytm=(req,res,next)=>
{
    let params={}
    params['MID'] ='AOTQKP97983754181523',
    params['WEBSITE']='WEBSTAGING',
    params['CHANNEL_ID']='WEB',
    params['INDUSTRY_TYPE_ID']='Retail',
    params['ORDER_ID']='OD0001',
    params['CUST_ID']='CUST0011',
    params['TXN_AMOUNT']='100',
    params['CALLBACK_URL']='/success',
    params['EMAIL']='arnavjainkht@gmail.com',
    params['MOBILE_NO']='7895985157'
 
    // checksum_lib.genchecksum(params,'cAxPRdkcR_zVY#PC',function(err,checksum)
    // {
    //     let txn_url="https://securegw-stage.paytm.in/order/process";

    //     let form_field=""
    //     for(x in params)
    //     {
    //         form_field+="<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"
    //     }
    //     form_field+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

    //     var html='<html><body><center><h1>Please wait! Do not refresh the page </h1></center><form method ="post" action="'+txn_url+'" name="f1" >'+form_field+'</form><script type="text/javascript">document.f1.submit()</body></html>'
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write(html)
    //     res.end()
    // })
    checksum_lib.genchecksum(params,'cAxPRdkcR_zVY#PC',function(err,checksum)
    {
    res.status(201).json({
        message: 'Paytm details',
        MID:'AOTQKP97983754181523',
        WEBSITE:'WEBSTAGING',
        CHANNEL_ID:'WEB',
        INDUSTRY_TYPE_ID:'Retail',
        ORDER_ID:'ORDER_IDksdckjsd',
        CUST_ID:'skdjbv',
        TXN_AMOUNT:'100',
        CALLBACK_URL:'http://amuletentertainment.in/response',
        EMAIL:'arnavjainkht@gmail.com',
        MOBILE_NO:'7895985157',
        CHECKSUMHASH:checksum
    });
})
    // }
    // )
    
}