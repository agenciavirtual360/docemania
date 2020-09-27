(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -94.59,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C6755D4D_D178_6869_41E9_61E4B8C3A18D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -146.02,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C511F9E8_D178_6828_41C4_7655C4F3E183",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_rotation"
},
{
 "idleSequence": "this.sequence_C5A32C8E_D178_68E9_41CE_CD3C6ECB0ED8",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 78.06,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": "this.sequence_C5A32C8E_D178_68E9_41CE_CD3C6ECB0ED8",
 "id": "camera_C5A34C8E_D178_68E8_41C4_B1EAC7FCD04A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152249_12",
 "id": "panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
 "thumbnailUrl": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2C06B82_CD07_B746_41B4_DE62D6196D70",
  "this.overlay_DD06DD82_CD07_D346_419B_EDCD1D415C90"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151841_7",
 "id": "panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
 "thumbnailUrl": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2691B45_CD08_B7CD_41E4_FCE74E222128",
  "this.overlay_DD0A4C51_CD08_D1C2_41DB_1440E4288017"
 ]
},
{
 "initialPosition": {
  "yaw": 48.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C58DBC13_D178_6FF8_41B9_950D0B327A1F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C5D18B1C_D178_69E8_4159_A48ADCDCD862",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 147.86,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": "this.sequence_C5D18B1C_D178_69E8_4159_A48ADCDCD862",
 "id": "camera_C5D1AB1C_D178_69E8_41DC_F3B056F4313E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151219_1",
 "id": "panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
 "thumbnailUrl": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2FA75B6_CD09_D34F_41E5_CDD4CFAF50CA",
  "this.overlay_C2B6DC12_CD09_5146_41C5_2BB521CF019E",
  "this.overlay_C35D249C_D158_78EF_41D2_6DD1B2BB1B09"
 ]
},
{
 "idleSequence": "this.sequence_C6642D8E_D178_68E8_41E3_DF028A95303D",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": -64.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_C6642D8E_D178_68E8_41E3_DF028A95303D",
 "id": "camera_C6643D8E_D178_68EB_41CB_141334303EFB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151611_5",
 "id": "panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
 "thumbnailUrl": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2EDB829_CD0B_F142_41E5_701F2D164DB5",
  "this.overlay_C2D5B5D3_CD0B_52C6_41C0_BBC8A44EF207"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 115.66,
   "backwardYaw": -84.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152221_11",
 "id": "panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
 "thumbnailUrl": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2DDDDA8_CD07_D342_41D3_9CEE9DC70E5F",
  "this.overlay_DD160D19_CD07_B342_41CD_A03833E73FF9"
 ]
},
{
 "initialPosition": {
  "yaw": 105.61,
  "class": "PanoramaCameraPosition",
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C647CD10_D178_69F7_417E_8A79AD0DCC0A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C50CAA4B_D178_6869_41E3_4F7E6A36187F",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 95.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_C50CAA4B_D178_6869_41E3_4F7E6A36187F",
 "id": "camera_C50CBA4B_D178_6869_41E9_F93E7BB41CFD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151746_6",
 "id": "panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
 "thumbnailUrl": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2CAEDC1_CD08_D2C5_41CD_BF70A7935CD9",
  "this.overlay_DD170CEC_CD08_B2C2_41D5_3E6304757F02",
  "this.overlay_DC3502EB_CD0B_B6C6_41E0_70201C3DFFEC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -131.84,
   "backwardYaw": -5.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "distance": 1
  },
  {
   "yaw": 52.04,
   "backwardYaw": -122.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151323_3",
 "id": "panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
 "thumbnailUrl": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2FEF40B_CD08_B146_41D5_9223A70354AA",
  "this.overlay_DD38F425_CD09_5142_4173_211F35273BF6"
 ]
},
{
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": -33.98,
  "class": "PanoramaCameraPosition",
  "pitch": -10.31
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -134.08,
  "class": "PanoramaCameraPosition",
  "pitch": -15.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C598EBD0_D178_6878_41E6_73A47C60B3FE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152015_8",
 "id": "panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
 "thumbnailUrl": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2C2C139_CD09_7345_419E_14C2A982CF6C",
  "this.overlay_C2EF1B2C_CD09_7742_41D8_BD9B87EE1C72"
 ]
},
{
 "initialPosition": {
  "yaw": 104.69,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C669DDD3_D178_6879_41BE_4191350DC4E7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 }
},
{
 "initialPosition": {
  "yaw": 174.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C618EE21_D178_6BD9_41A9_F139379DEC1C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_C52ECAEA_D178_6828_41E2_550A4B38247D",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": -94.59,
  "class": "PanoramaCameraPosition",
  "pitch": -15.61
 },
 "initialSequence": "this.sequence_C52ECAEA_D178_6828_41E2_550A4B38247D",
 "id": "camera_C52EDAEA_D178_6828_41DD_478F7B6DB06F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152643_16",
 "id": "panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
 "thumbnailUrl": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2FD4715_CD19_5F42_41DE_CA5BB7E80B5A"
 ]
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.69,
  "class": "PanoramaCameraPosition",
  "pitch": -13.78
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C5E9DBAD_D178_6828_41B9_1C7007C76D30",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152445_14",
 "id": "panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
 "thumbnailUrl": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD81DEA9_CD18_F142_41DE_8EE28F3C559A",
  "this.overlay_C2F14C45_CD18_B1C2_41E1_198ECE5071F1",
  "this.overlay_DD2D80A5_CD07_7142_41E7_BF48627B00FE"
 ]
},
{
 "initialPosition": {
  "yaw": 57.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C6084E68_D178_6857_41E4_71C8C408D83F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151134_0",
 "id": "panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
 "thumbnailUrl": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2E4C36D_CD08_D7DD_41CB_1FCF78DB126D",
  "this.overlay_DCDF9CB1_CD0B_F142_41E5_25BC05EAEE72"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -61.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C5E40B8A_D178_68E8_41BC_C06A9D1F5F5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152541_15",
 "id": "panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
 "thumbnailUrl": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD134ADF_CD18_B6FE_41CA_4D806E12D3C8"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": -113.88,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "id": "camera_C51A7A17_D178_6BF9_41B2_9D6CD15EB46F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.44,
   "backwardYaw": -131.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151249_2",
 "id": "panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
 "thumbnailUrl": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2F9AC71_CD09_71C2_41B1_5D5D5107017E",
  "this.overlay_DD3BCB69_CD09_57C5_41E5_5F554931FBA9"
 ]
},
{
 "idleSequence": "this.sequence_C6516CD6_D178_687B_41CE_B861823C835F",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 156.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": "this.sequence_C6516CD6_D178_687B_41CE_B861823C835F",
 "id": "camera_C6517CD1_D178_6879_41D1_699831364360",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -84.39,
   "backwardYaw": 115.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152149_10",
 "id": "panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
 "thumbnailUrl": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2E9F673_CD07_51C6_41E6_E1665D01FD0E",
  "this.overlay_C292980E_CD08_B15E_41E7_36602018384F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_152059_9",
 "id": "panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
 "thumbnailUrl": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2DCA587_CD08_F34E_41DD_FAF7603FB2E7",
  "this.overlay_DD169C9B_CD08_D146_41E5_592CFD2B65E5"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 79.9,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C5F58B66_D178_6858_41E4_D27D8B4ABEBF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 168.06,
  "class": "PanoramaCameraPosition",
  "pitch": 17.45
 },
 "id": "camera_C56F89B7_D178_6839_41D6_286593F0B44D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -127.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C5377A7F_D178_6829_41B3_7171FB97AEB4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 105.61,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C5BCDC4C_D178_6866_41E7_0DA0D414C752",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "yaw": -122.84,
   "backwardYaw": 52.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "PANO_20200923_151343_4",
 "id": "panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
 "thumbnailUrl": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 135,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "height": 2560,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "height": 1536,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2EFA666_CD08_D1CC_41E8_AA7F235D26E9",
  "this.overlay_DD2E049A_CD08_F146_41E0_5ECC355655CF"
 ]
},
{
 "initialPosition": {
  "yaw": -84.49,
  "class": "PanoramaCameraPosition",
  "pitch": -9.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C53A9AB3_D178_6838_41DF_F970953CADF7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 162.55,
  "class": "PanoramaCameraPosition",
  "pitch": -6.43
 },
 "id": "camera_C5C0DB41_D178_6858_41E1_D9DE5DA153BC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 50,
 "toolTipPaddingBottom": 7,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 0,
 "contentOpaque": false,
 "height": 60,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FF0000",
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "--BUTTON SET"
 },
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0.14,
  0.89
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "right": 15,
 "width": 60,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": 62,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 300,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0.02
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "shadow": false,
 "bottom": "0%",
 "paddingRight": 30,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "height": 90,
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "---REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "width": 60,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 30,
 "rollOverBackgroundOpacity": 1,
 "pressedIconHeight": 30,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "cursor": "hand",
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "data": {
  "name": "Button Settings Fullscreen"
 }
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "width": 60,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 30,
 "rollOverBackgroundOpacity": 1,
 "pressedIconHeight": 30,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "cursor": "hand",
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "data": {
  "name": "Button Settings Mute"
 }
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "width": 60,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 30,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "data": {
  "name": "Button settings VR"
 }
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "width": 60,
 "rollOverIconHeight": 30,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 30,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "pressedIconHeight": 30,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "cursor": "hand",
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "data": {
  "name": "Button Settings HS"
 }
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "rollOverIconHeight": 30,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 30,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "pressedIconHeight": 30,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "pressedIconWidth": 30,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 30,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "cursor": "hand",
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "data": {
  "name": "Button Settings Gyro"
 }
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C5A32C8E_D178_68E9_41CE_CD3C6ECB0ED8",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A, this.camera_C5C0DB41_D178_6858_41E1_D9DE5DA153BC); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.86,
   "image": "this.AnimatedImageResource_ECD692F7_CD08_F6CD_41E7_EF69A46ADD9B",
   "pitch": -31.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.57,
   "distance": 100
  }
 ],
 "id": "overlay_C2C06B82_CD07_B746_41B4_DE62D6196D70",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.86,
   "yaw": -2.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8, this.camera_C5D1AB1C_D178_69E8_41DC_F3B056F4313E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.61,
   "image": "this.AnimatedImageResource_ECD722F8_CD08_F6C3_41B4_B26DDAF44F07",
   "pitch": -27.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.93,
   "distance": 100
  }
 ],
 "id": "overlay_DD06DD82_CD07_D346_419B_EDCD1D415C90",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.61,
   "yaw": 172.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9, this.camera_C53A9AB3_D178_6838_41DF_F970953CADF7); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.17,
   "image": "this.AnimatedImageResource_ECD4F2ED_CD08_F6DD_41E4_4A4B288F62B3",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -105.66,
   "distance": 100
  }
 ],
 "id": "overlay_C2691B45_CD08_B7CD_41E4_FCE74E222128",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.17,
   "yaw": -105.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.39,
   "image": "this.AnimatedImageResource_ECD512EE_CD08_F6DF_41D3_B332136E0E09",
   "pitch": -29.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.75,
   "distance": 100
  }
 ],
 "id": "overlay_DD0A4C51_CD08_D1C2_41DB_1440E4288017",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.39,
   "yaw": 110.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C5D18B1C_D178_69E8_4159_A48ADCDCD862",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.31,
   "image": "this.AnimatedImageResource_C2D034E7_D158_F858_41E1_826505036210",
   "pitch": -37.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.93,
   "distance": 100
  }
 ],
 "id": "overlay_C2FA75B6_CD09_D34F_41E5_CDD4CFAF50CA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.31,
   "yaw": 82.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE, this.camera_C511F9E8_D178_6828_41C4_7655C4F3E183); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.34,
   "image": "this.AnimatedImageResource_C1CA076E_D0F8_B82B_41E8_DC3F69D41719",
   "pitch": -28.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -124.63,
   "distance": 50
  }
 ],
 "id": "overlay_C2B6DC12_CD09_5146_41C5_2BB521CF019E",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.34,
   "yaw": -124.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.91,
   "image": "this.AnimatedImageResource_C2D064EC_D158_F828_41E3_01BBC63C373C",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.44,
   "distance": 100
  }
 ],
 "id": "overlay_C35D249C_D158_78EF_41D2_6DD1B2BB1B09",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.91,
   "yaw": -77.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C6642D8E_D178_68E8_41E3_DF028A95303D",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9, this.camera_C5F58B66_D178_6858_41E4_D27D8B4ABEBF); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.71,
   "image": "this.AnimatedImageResource_C1F4176E_D0F8_B82B_41E9_4253154C04BC",
   "pitch": -35.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.54,
   "distance": 100
  }
 ],
 "id": "overlay_C2EDB829_CD0B_F142_41E5_701F2D164DB5",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": 92.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4, this.camera_C5E40B8A_D178_68E8_41BC_C06A9D1F5F5E); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.65,
   "image": "this.AnimatedImageResource_C1F5C76E_D0F8_B82B_41CB_CD8B5E811E23",
   "pitch": -39.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.35,
   "distance": 50
  }
 ],
 "id": "overlay_C2D5B5D3_CD0B_52C6_41C0_BBC8A44EF207",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.65,
   "yaw": -121.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.86,
   "image": "this.AnimatedImageResource_ECD622F5_CD08_F6CD_41B0_DB4E31CA3155",
   "pitch": -31.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.97,
   "distance": 100
  }
 ],
 "id": "overlay_C2DDDDA8_CD07_D342_41D3_9CEE9DC70E5F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.86,
   "yaw": 3.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5, this.camera_C50CBA4B_D178_6869_41E9_F93E7BB41CFD); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.32,
   "image": "this.AnimatedImageResource_ECD672F6_CD08_F6CF_41DC_AE0B6040D711",
   "pitch": -23.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.66,
   "distance": 100
  }
 ],
 "id": "overlay_DD160D19_CD07_B342_41CD_A03833E73FF9",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.32,
   "yaw": 115.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C50CAA4B_D178_6869_41E3_4F7E6A36187F",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0, this.camera_C6755D4D_D178_6869_41E9_61E4B8C3A18D); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.87,
   "image": "this.AnimatedImageResource_C1F5876E_D0F8_B82B_41CE_DE9BEF96FA66",
   "pitch": -33.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -89.09,
   "distance": 100
  }
 ],
 "id": "overlay_C2CAEDC1_CD08_D2C5_41CD_BF70A7935CD9",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.87,
   "yaw": -89.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.45,
   "image": "this.AnimatedImageResource_ECD412EB_CD08_F6C5_41AE_E359F3A6B131",
   "pitch": -33.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.25,
   "distance": 100
  }
 ],
 "id": "overlay_DD170CEC_CD08_B2C2_41D5_3E6304757F02",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 88.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE, this.camera_C647CD10_D178_69F7_417E_8A79AD0DCC0A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.39,
   "image": "this.AnimatedImageResource_ECD4A2EC_CD08_F6C3_41E4_488B494C6B5F",
   "pitch": -29.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 144.29,
   "distance": 100
  }
 ],
 "id": "overlay_DC3502EB_CD0B_B6C6_41E0_70201C3DFFEC",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.39,
   "yaw": 144.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C656A80C_CD09_D142_41E9_737F55FBD34B, this.camera_C618EE21_D178_6BD9_41A9_F139379DEC1C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.95,
   "image": "this.AnimatedImageResource_C1CB576E_D0F8_B82B_41C7_81A52969A77E",
   "pitch": -38.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -131.84,
   "distance": 100
  }
 ],
 "id": "overlay_C2FEF40B_CD08_B146_41D5_9223A70354AA",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.95,
   "yaw": -131.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4, this.camera_C6084E68_D178_6857_41E4_71C8C408D83F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.86,
   "image": "this.AnimatedImageResource_C1CB376E_D0F8_B82B_41D4_6D0965163675",
   "pitch": -37.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52.04,
   "distance": 100
  }
 ],
 "id": "overlay_DD38F425_CD09_5142_4173_211F35273BF6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.86,
   "yaw": 52.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65163B2_CD09_5746_41E8_215FC615A8A5, this.camera_C52EDAEA_D178_6828_41DD_478F7B6DB06F); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.95,
   "image": "this.AnimatedImageResource_ECD5A2EE_CD08_F6DC_41DE_B64C213314FE",
   "pitch": -25.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -54.53,
   "distance": 100
  }
 ],
 "id": "overlay_C2C2C139_CD09_7345_419E_14C2A982CF6C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.95,
   "yaw": -54.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.17,
   "image": "this.AnimatedImageResource_ECD412F0_CD08_F6C3_41E7_92A8D209A30C",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 129.97,
   "distance": 100
  }
 ],
 "id": "overlay_C2EF1B2C_CD09_7742_41D8_BD9B87EE1C72",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.17,
   "yaw": 129.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C52ECAEA_D178_6828_41E2_550A4B38247D",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A, this.camera_C51A7A17_D178_6BF9_41B2_9D6CD15EB46F); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.87,
   "image": "this.AnimatedImageResource_ECD0C2FD_CD08_F6BC_41E6_7F77402822AC",
   "pitch": -19.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.98,
   "distance": 100
  }
 ],
 "id": "overlay_C2FD4715_CD19_5F42_41DE_CA5BB7E80B5A",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.87,
   "yaw": -29.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49, this.camera_C5A34C8E_D178_68E8_41C4_B1EAC7FCD04A); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.07,
   "image": "this.AnimatedImageResource_ECD752F9_CD08_F6C5_41E5_6C82E7950CBC",
   "pitch": -24.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -124.89,
   "distance": 100
  }
 ],
 "id": "overlay_DD81DEA9_CD18_F142_41DE_8EE28F3C559A",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.07,
   "yaw": -124.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017, this.camera_C6517CD1_D178_6879_41D1_699831364360); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.86,
   "image": "this.AnimatedImageResource_ECD7E2FA_CD08_F6C7_41E7_18EC44B79070",
   "pitch": -31.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.97,
   "distance": 100
  }
 ],
 "id": "overlay_C2F14C45_CD18_B1C2_41E1_198ECE5071F1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.86,
   "yaw": 93.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.79,
   "image": "this.AnimatedImageResource_C1F1B77E_D0F8_B82B_41D5_C1579245656E",
   "pitch": -25.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -12.39,
   "distance": 100
  }
 ],
 "id": "overlay_DD2D80A5_CD07_7142_41E7_BF48627B00FE",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.79,
   "yaw": -12.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A, this.camera_C56F89B7_D178_6839_41D6_286593F0B44D); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.36,
   "image": "this.AnimatedImageResource_C1C9876E_D0F8_B82B_41E3_BC899BADA75B",
   "pitch": -30.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.75,
   "distance": 100
  }
 ],
 "id": "overlay_C2E4C36D_CD08_D7DD_41CB_1FCF78DB126D",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.36,
   "yaw": -172.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.91,
   "image": "this.AnimatedImageResource_C1CAE76E_D0F8_B82B_41E5_AB62CE8AE9AA",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.44,
   "distance": 100
  }
 ],
 "id": "overlay_DCDF9CB1_CD0B_F142_41E5_25BC05EAEE72",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.91,
   "yaw": -77.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.1,
   "image": "this.AnimatedImageResource_ECD052FC_CD08_F6C3_41C9_94835D1C35B2",
   "pitch": -17.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.3,
   "distance": 100
  }
 ],
 "id": "overlay_DD134ADF_CD18_B6FE_41CA_4D806E12D3C8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.1,
   "yaw": -107.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7, this.camera_C58DBC13_D178_6FF8_41B9_950D0B327A1F); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.22,
   "image": "this.AnimatedImageResource_C1CBF76E_D0F8_B82B_41E1_42441BB3A9F2",
   "pitch": -44.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.44,
   "distance": 100
  }
 ],
 "id": "overlay_C2F9AC71_CD09_71C2_41B1_5D5D5107017E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.22,
   "yaw": -5.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B, this.camera_C5BCDC4C_D178_6866_41E7_0DA0D414C752); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.28,
   "image": "this.AnimatedImageResource_C1CB876E_D0F8_B82B_41E8_22469E0FB45C",
   "pitch": -34.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.88,
   "distance": 100
  }
 ],
 "id": "overlay_DD3BCB69_CD09_57C5_41E5_5F554931FBA9",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.28,
   "yaw": 89.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCameraSequence",
 "id": "sequence_C6516CD6_D178_687B_41CE_B861823C835F",
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8, this.camera_C6643D8E_D178_68EB_41CB_141334303EFB); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.2,
   "image": "this.AnimatedImageResource_ECD562F3_CD08_F6C5_41E5_1B1C12A35137",
   "pitch": -35.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.39,
   "distance": 100
  }
 ],
 "id": "overlay_C2E9F673_CD07_51C6_41E6_E1665D01FD0E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.2,
   "yaw": -84.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9, this.camera_C669DDD3_D178_6879_41BE_4191350DC4E7); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.19,
   "image": "this.AnimatedImageResource_ECD5B2F4_CD08_F6C3_41D5_DAB94D8132C2",
   "pitch": -39.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.2,
   "distance": 100
  }
 ],
 "id": "overlay_C292980E_CD08_B15E_41E7_36602018384F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.19,
   "yaw": 5.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1055711_CD08_BF42_41CE_88CE28B660CE, this.camera_C5E9DBAD_D178_6828_41B9_1C7007C76D30); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.09,
   "image": "this.AnimatedImageResource_ECD4B2F1_CD08_F6C5_41E5_619D262742B6",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.97,
   "distance": 100
  }
 ],
 "id": "overlay_C2DCA587_CD08_F34E_41DD_FAF7603FB2E7",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.09,
   "yaw": 66.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C65635A2_CD08_B346_417B_8A76602D83E9, this.camera_C598EBD0_D178_6878_41E6_73A47C60B3FE); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.45,
   "image": "this.AnimatedImageResource_ECD4D2F2_CD08_F6C7_41E7_83BF1CD2FF54",
   "pitch": -33.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 152.47,
   "distance": 100
  }
 ],
 "id": "overlay_DD169C9B_CD08_D146_41E5_592CFD2B65E5",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.45,
   "yaw": 152.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C66A0049_CD09_51C2_418D_73D3732825D7, this.camera_C5377A7F_D178_6829_41B3_7171FB97AEB4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.7,
   "image": "this.AnimatedImageResource_C1F4F76E_D0F8_B82B_41CB_51638FE65A42",
   "pitch": -42.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.84,
   "distance": 100
  }
 ],
 "id": "overlay_C2EFA666_CD08_D1CC_41E8_AA7F235D26E9",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -122.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.01,
   "image": "this.AnimatedImageResource_C1F4A76E_D0F8_B82B_41C8_51D3CA8CE256",
   "pitch": -40.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.56,
   "distance": 100
  }
 ],
 "id": "overlay_DD2E049A_CD08_F146_41E0_5ECC355655CF",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.01,
   "yaw": 48.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "fontFamily": "Montserrat",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 196,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "text": "Doce Mania",
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "fontSize": 31,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "class": "Label",
 "borderRadius": 0,
 "height": 60,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textDecoration": "none",
 "propagateClick": false,
 "data": {
  "name": "Label Company Name"
 },
 "fontWeight": "normal",
 "paddingLeft": 0
},
{
 "maxHeight": 30,
 "maxWidth": 40,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "shadow": false,
 "bottom": "0%",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "4.222%",
 "paddingTop": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "logo"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "width": 1199,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "contentOpaque": false,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 15,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 1,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "visible": false,
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "shadow": false,
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "center",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "shadow": false,
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "center",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "center",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": true,
 "shadowSpread": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "shadow": false,
 "bottom": "80%",
 "paddingRight": 20,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "paddingLeft": 0
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD692F7_CD08_F6CD_41E7_EF69A46ADD9B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD722F8_CD08_F6C3_41B4_B26DDAF44F07",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65F7518_CD09_7342_41E3_AD6F352DA074_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD4F2ED_CD08_F6DD_41E4_4A4B288F62B3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD512EE_CD08_F6DF_41D3_B332136E0E09",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6543E5F_CD0B_B1FC_41D4_4E980CB73744_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C2D034E7_D158_F858_41E1_826505036210",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CA076E_D0F8_B82B_41E8_DC3F69D41719",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C2D064EC_D158_F828_41E3_01BBC63C373C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C64B30C6_CD09_B2CE_41DD_7DD4C6FBF80B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F4176E_D0F8_B82B_41E9_4253154C04BC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F5C76E_D0F8_B82B_41CB_CD8B5E811E23",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C66BCFF0_CD0B_4EC2_41DE_F4B4710CE7B0_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD622F5_CD08_F6CD_41B0_DB4E31CA3155",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD672F6_CD08_F6CF_41DC_AE0B6040D711",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C652EE7F_CD09_F1BD_41BD_756AB3673DC8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F5876E_D0F8_B82B_41CE_DE9BEF96FA66",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD412EB_CD08_F6C5_41AE_E359F3A6B131",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD4A2EC_CD08_F6C3_41E4_488B494C6B5F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C657C718_CD0B_DF42_41E7_C6968E90C1B9_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CB576E_D0F8_B82B_41C7_81A52969A77E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CB376E_D0F8_B82B_41D4_6D0965163675",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C66A0049_CD09_51C2_418D_73D3732825D7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD5A2EE_CD08_F6DC_41DE_B64C213314FE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD412F0_CD08_F6C3_41E7_92A8D209A30C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65635A2_CD08_B346_417B_8A76602D83E9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD0C2FD_CD08_F6BC_41E6_7F77402822AC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C652B949_CD0F_B3C2_41E0_C862EFFF3017_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD752F9_CD08_F6C5_41E5_6C82E7950CBC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD7E2FA_CD08_F6C7_41E7_18EC44B79070",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F1B77E_D0F8_B82B_41D5_C1579245656E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65DBBE2_CD08_D6C6_41E6_E561C3BDFE8A_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1C9876E_D0F8_B82B_41E3_BC899BADA75B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CAE76E_D0F8_B82B_41E5_AB62CE8AE9AA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1055711_CD08_BF42_41CE_88CE28B660CE_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD052FC_CD08_F6C3_41C9_94835D1C35B2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6530276_CD0F_51CE_41C6_DE3CE8005E49_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CBF76E_D0F8_B82B_41E1_42441BB3A9F2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1CB876E_D0F8_B82B_41E8_22469E0FB45C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C656A80C_CD09_D142_41E9_737F55FBD34B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD562F3_CD08_F6C5_41E5_1B1C12A35137",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD5B2F4_CD08_F6C3_41D5_DAB94D8132C2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C65163B2_CD09_5746_41E8_215FC615A8A5_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD4B2F1_CD08_F6C5_41E5_619D262742B6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_ECD4D2F2_CD08_F6C7_41E7_83BF1CD2FF54",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6574CCD_CD08_D2C2_4196_9CEDACE20123_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F4F76E_D0F8_B82B_41CB_51638FE65A42",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C1F4A76E_D0F8_B82B_41C8_51D3CA8CE256",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C668D7F0_CD08_FEC2_41DB_247B65E138F4_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "width": 116,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 1"
 },
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "label": "RECEPTION",
 "popUpBorderRadius": 0,
 "class": "DropDown",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpPaddingLeft": 15
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "width": 96,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "paddingRight": 15,
 "minWidth": 1,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingTop": 0,
 "label": "ROOMS",
 "popUpBorderRadius": 5,
 "class": "DropDown",
 "borderRadius": 0,
 "fontStyle": "normal",
 "gap": 0,
 "paddingBottom": 0,
 "popUpShadowSpread": 1,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpPaddingLeft": 15
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "width": 114,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 3"
 },
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "label": "AMENITIES",
 "popUpBorderRadius": 0,
 "class": "DropDown",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpPaddingLeft": 15
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "width": 130,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 4"
 },
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "label": "SPORTS AREA",
 "popUpBorderRadius": 0,
 "class": "DropDown",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpPaddingLeft": 15
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "width": 152,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 5"
 },
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "label": "SWIMMING POOL",
 "popUpBorderRadius": 0,
 "class": "DropDown",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpPaddingLeft": 15
},
{
 "paddingLeft": 15,
 "fontFamily": "Montserrat",
 "popUpBackgroundColor": "#F7931E",
 "popUpFontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "width": 136,
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "data": {
  "name": "DropDown 6"
 },
 "popUpShadow": false,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "pressedBackgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "minHeight": 1,
 "height": 60,
 "minWidth": 1,
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingTop": 10,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "backgroundOpacity": 1,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "label": "RESTAURANTS",
 "popUpBorderRadius": 0,
 "class": "DropDown",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "propagateClick": false,
 "popUpShadowSpread": 1,
 "fontWeight": "bold",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "popUpPaddingLeft": 15
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "width": 60,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 17,
 "rollOverBackgroundOpacity": 1,
 "iconBeforeLabel": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingRight": 0,
 "fontSize": 12,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "class": "Button",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 17,
 "shadowSpread": 1,
 "propagateClick": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "data": {
  "name": "Button Settings"
 }
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "width": "85%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "scrollBarColor": "#000000",
 "width": 8,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "orange line"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 50,
 "minWidth": 460,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingBottom": 20,
 "width": "50%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "height": 140,
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#F7931E",
 "itemThumbnailOpacity": 1,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "horizontalAlign": "center",
 "itemMaxHeight": 1000,
 "minHeight": 1,
 "itemBorderRadius": 0,
 "shadow": false,
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "minWidth": 1,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#F7931E",
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "height": "92%",
 "propagateClick": false,
 "width": "100%",
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#F7931E",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 13,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "class": "ThumbnailGrid",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220
},
{
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.234643135719!2d-48.27601588510107!3d-18.921005387177036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450732788cb5%3A0x9babed2eead0d0dc!2sDoce%20Mania!5e0!3m2!1spt-BR!2sbr!4v1601221960508!5m2!1spt-BR!2sbr",
 "minHeight": 1,
 "paddingRight": 0,
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "class": "WebFrame",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "height": "100%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "width": "55%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "scrollBarColor": "#000000",
 "width": 8,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "orange line"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 60,
 "minWidth": 460,
 "contentOpaque": false,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "paddingBottom": 20,
 "width": "45%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "class": "Image",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "height": 60,
 "gap": 0,
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 100,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 30,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "top": 20,
 "shadow": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "top": 20,
 "shadow": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "minWidth": 1,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "verticalAlign": "middle",
 "top": "20%",
 "shadow": false,
 "bottom": "20%",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "verticalAlign": "middle",
 "top": "20%",
 "shadow": false,
 "bottom": "20%",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "top": 20,
 "shadow": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "width": "10%",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "top": "0%",
 "shadow": false,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "class": "Image",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "shadow": false,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "height": 60,
 "gap": 0,
 "paddingBottom": 0,
 "width": "100%",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 100,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 30,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 40,
 "minWidth": 1,
 "paddingRight": 0,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingRight": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.82vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.82vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.82vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "iconHeight": 32,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": "1.96vh",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.8,
 "iconBeforeLabel": true,
 "shadow": false,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "class": "Button",
 "borderRadius": 0,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "fontWeight": "bold",
 "cursor": "hand"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "height": "45%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "width": "100%",
 "height": "80%",
 "propagateClick": false,
 "data": {
  "name": "- content"
 },
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "shadow": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "class": "Image",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#F7931E",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingRight": 10,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "75%",
 "paddingTop": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.99vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
}],
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "existsKey": function(key){  return key in window; }
 },
 "minHeight": 20,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 20,
 "downloadEnabled": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
