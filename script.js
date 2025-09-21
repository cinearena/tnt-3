jwplayer("jwplayerDiv").setup({    
         file: "https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
         position: 'bottom',  
        "autostart": true,
        "Volume": "100",
        "mute": false,
        "stretching": "exactfit",
        "width": "100%", 
      type: "mpd",   
    drm: { "clearkey": {    
              "keyId": "08efc7fb107981608f7b64db5ea62469",    
              "key": "3a6844bc9f0d9d9fd962639d7e4eb76a" 

            }    
             }            
});   
