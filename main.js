const myHeaders = new Headers();
myHeaders.append("x-api-key", "fwjFlNJj2Ei7625vMk9j1zpggqIrBxkbxrmwa4fEKngIkqiHZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaVlYTmxRWEJwUzJWNUlqb2labmRxUm14T1Ntb3lSV2szTmpJMWRrMXJPV294ZW5CblozRkpja0o0YTJKNGNtMTNZVFJtUlV0dVowbHJjV2xJSWl3aWIzZHVaWEpKWkNJNklqTXdNVEEwT0RJMU9EQWlMQ0poZFdRaU9pSlNiMkpzYjNoSmJuUmxjbTVoYkNJc0ltbHpjeUk2SWtOc2IzVmtRWFYwYUdWdWRHbGpZWFJwYjI1VFpYSjJhV05sSWl3aVpYaHdJam94TnpVMU56Y3hPREl3TENKcFlYUWlPakUzTlRVM05qZ3lNakFzSW01aVppSTZNVGMxTlRjMk9ESXlNSDAuS2tfV3k5M01YWV9xWU8yWmxwelRSbjE3ekVUTENDcUoxVk40SHd1X0hWT09VZWY2S1k2WUZHbjhVZVkyalpvZzZjRzVuM2hfYWFzSWZTU19Rb1E3bE1hMF9PeFE2NmZjMHB0UkN3TkRpbUx1cHdlQlUwNlBlQnRkYjlqSkVpZ3I5VVRaZmlyNnR2Q2JZR2p4aTBoTXVFU0VBb3dOYWVLQzRxTDMxZkQ4cW91T3pLTnpPNVNqVEF6VjA0SW9tbVl3NXRmZjBJMkpFUlhObFlzTlNhRGdpSTMySEYxNnVsSl84dnljMGtBUFc3WmFQbnhzRGFKaThtampLb0E2Z09LRUFQMDAtbVFRUkNIMDhhV0JEVHE5dlhuQ3ZDVjFSbTdhcmlXUjdjN2I0c284UWtmdnVVaWx1dHhUSjc1MXFLSkxmWU9BOHdYbW54UjRCdkIycHNYRDJn");

const placeholder = "Media/sybau.jpg"

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://apis.roblox.com/cloud/v2/users/3010482580:generateThumbnail?size=150&shape=ROUND", requestOptions)
  .then((response) => response.json())


  ;

  //img = document.querySelector("img.profile-picture");

  //if(img) {
    //img.src = placeholder;

    //img.onerror = function() { this.onerror = null; this.src = placeholder; };
    //img.width = 150;
    //img.height = 150;
  //};
