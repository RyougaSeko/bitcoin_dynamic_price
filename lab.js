
setInterval(myfnc, 3000)
 
 function myfnc(){


 // document.addEventListener('DOMContentLoaded', function() {

            $.ajax({
                url: 'https://api.coincap.io/v2/assets', //アクセスするURL
                type: 'get',   //post or get
                cache: false,        //cacheを使うか使わないかを設定
                dataType:'json',     //data type script・xmlDocument・jsonなど
            })
            .done(function(response) { 
                //通信成功時の処理
                //成功したとき実行したいスクリプトを記載
                //responseはjsonオブジェクト
                console.log(response)
                // document.querySelector('h2').innerHTML = response.data[0]["id"]
                Example(response)
            })
            .fail(function(xhr) {  
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function(xhr, msg) { 
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });   

                // sleep(10000);
    // })

}

// while (true) {
    

//     document.addEventListener('DOMContentLoaded', function() {
//         // Send a GET request to the URL
//         // fetch('https://public.bitbank.cc/tickers_jpy')
//         fetch('https://api.coincap.io/v2/assets')

//         // Put response into json form
//         .then(response => response.json())
            
//         .then(data => {
//             // Log data to the console
//             Example(data);
//         });

//     });

//     sleep(3000);

// }


function Example(jsonObj){
    const data = jsonObj.data[0]["id"];
    const data2 = jsonObj.data[0]["priceUsd"];
    document.querySelector('h2').innerHTML = data;
    document.querySelector('h3').innerHTML = data2;
    //色をかえる
    $(function(){
        //色を指定するのはどちらでもできる
        $("h2").css("color", "#0000ff");
    
      });
   }

