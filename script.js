(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.playList_57A12ABF_7312_5618_41D9_1EC660EF84EA.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
  "this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
  "this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "thumbnailUrl": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_t.jpg",
 "class": "Panorama",
 "label": "P _ Mbath _ 001",
 "id": "panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641",
   "backwardYaw": -77.24,
   "yaw": -82.15,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6BFD5CE1_7376_7228_41BA_442AA8A074BE",
  "this.overlay_6B6F97D0_736F_DE68_41D6_EC3C833A99AC",
  "this.panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.95,
  "pitch": 0
 },
 "id": "camera_56251C6C_7312_5238_41D5_7FD886638B21"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55224E75_7312_4E28_41B6_F6C02C69F1EA",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8C979_731D_F218_41C1_B3ADDB26808A",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552DDE61_7312_4E28_41D3_E3E8DDC96C28",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55329E55_7312_4E68_41D1_F0CC3DFEEDE6",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55321E55_7312_4E68_41B3_816CAB45F553",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E76971_731D_F228_41D9_622E86487B48",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_L_005",
 "id": "panorama_796A3870_7312_D228_41D3_E18DAAFD4655",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
   "backwardYaw": -171.25,
   "yaw": 139.68,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
   "backwardYaw": -171.25,
   "yaw": -140.06,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6076163B_733E_5E18_41D3_215FDA87B9FA",
  "this.overlay_60E75300_733E_B7E8_41D0_BAECBABA8DF4",
  "this.overlay_673C9774_733F_DE28_41D9_7E4A397A08FB",
  "this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 1564,
   "angle": 181.69,
   "y": 1156,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55318E56_7312_4E68_41DB_FA822CC62919",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552DCE60_7312_4E28_41CB_D2AD89EECAAA",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55296E69_7312_4E38_41DB_E5D3E45E9053",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.52,
  "pitch": 0
 },
 "id": "camera_5544CE3B_7312_4E18_41C0_A6D7680C81E8"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5496B_731D_F238_41C5_026116F4BB06",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6196E_731D_F238_41D9_7466F966D69F",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55285E6B_7312_4E38_41CA_DAF146A72831",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5531CE57_7312_4E68_4192_87C53E1749D8",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6796C_731D_F238_41DC_D6A28E6BE56F",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55327E55_7312_4E68_419A_B412B57C6B87",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552EAE60_7312_4E28_41D2_0B2D5BE3ED5B",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55288E6B_7312_4E38_41D4_9F06E08EBABF",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E4D969_731D_F238_41DA_CD77754F496E",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552B6E62_7312_4E2D_41B1_45C3B7ED634C",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5F96A_731D_F238_41D3_CA31D928DA30",
 "duration": 1000
},
{
 "class": "MapPlayer",
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7C976_731D_F228_41BC_34DC9E40D3AB",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7696D_731D_F238_4182_9CF5B01C72B3",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55322E55_7312_4E68_41A5_EF842BA0A93C",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55309E5E_7312_4E18_41D2_70A7D94AE349",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.74,
  "pitch": 0
 },
 "id": "camera_56559BCC_7312_5678_41D8_D1DB8222CAA1"
},
{
 "thumbnailUrl": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_L_002",
 "id": "panorama_796B171E_7312_BE18_41DC_83DF5B223129",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
   "backwardYaw": -21.03,
   "yaw": 49.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D",
   "backwardYaw": 99.23,
   "yaw": -42.12,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6168CA3C_7335_B618_41DB_F335B241F982",
  "this.overlay_60145E7D_7333_CE18_41DC_2DEC62C8D69E",
  "this.overlay_67E70CE5_7332_D228_41D0_CD3455EEF11F",
  "this.overlay_671C9441_733D_D268_41D4_2F8489875C89",
  "this.panorama_796B171E_7312_BE18_41DC_83DF5B223129_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 437.2,
   "angle": 91.21,
   "y": 670,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552BCE68_7312_4E38_41D6_DC3AE187F4B6",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5524DE73_7312_4E28_41B0_4BA7C89289D8",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_t.jpg",
 "class": "Panorama",
 "label": "P_ MB_01",
 "id": "panorama_79609481_7312_52E8_41B6_BB22EBE8A641",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D",
   "backwardYaw": -82.15,
   "yaw": -77.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811",
   "backwardYaw": -88.05,
   "yaw": -94.58,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_65A56BAB_7332_B638_41D3_7B12C89A5741",
  "this.overlay_65AF5EA2_7372_4E28_41B1_DF52B9CBE4D2",
  "this.overlay_64EE43B1_7373_D628_419F_1EED138261F3",
  "this.overlay_6484D01B_7372_5218_41AE_9EB169A1E7ED",
  "this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7696F_731D_F238_41DA_FC5E4C19DC24",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5F967_731D_F228_41D7_168322B9E8FA",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7E970_731D_F228_41CE_C08CFA1ADEB9",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5529FE69_7312_4E38_41D2_341AB945FF57",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6396A_731D_F238_41C8_1933F397EA36",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53DA197B_731D_F218_41AA_00807CC665E8",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55298E6B_7312_4E38_41DB_D0C7F7D97D04",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796B171E_7312_BE18_41DC_83DF5B223129_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552CAE62_7312_4E28_41D5_E73AF36E7CC1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6D971_731D_F228_41C1_837982A42DB5",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.97,
  "pitch": 0
 },
 "id": "camera_56ECBD10_7312_53E8_4164_E314BC0252F4"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8B977_731D_F228_41BE_1FB9BD4C4A2C",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.85,
  "pitch": 0
 },
 "id": "camera_5632FC44_7312_5268_41AB_439A1D543014"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.97,
  "pitch": 0
 },
 "id": "camera_57899B06_7312_57E8_4157_6E6C8E1A6F7D"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7E974_731D_F228_41CA_2B1B695BCB24",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6596E_731D_F238_41A0_C8D4743BEEF6",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79609481_7312_52E8_41B6_BB22EBE8A641_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5534DE53_7312_4E6F_4192_2B4A879F5623",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552F3E5E_7312_4E18_41D1_96D8C438156E",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55257E73_7312_4E28_41CD_3941FEB95A93",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6D96F_731D_F238_41D5_100782FB9C1F",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55346E53_7312_4E68_41DA_1B4550B69C15",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552A4E68_7312_4E38_41D7_7A6C66C5B8CB",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55336E54_7312_4E68_41D5_E44B5ABE9E55",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E75971_731D_F228_41D3_2A4743984C24",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6196C_731D_F238_41D9_71362607644B",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D84975_731D_F228_41D8_6FC082FA2DDD",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6296E_731D_F238_41CD_065FCB841BB7",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.84,
  "pitch": 0
 },
 "id": "camera_5682BDD9_7312_5218_41C5_3678D17B7768"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D81975_731D_F228_41D1_85EEC9EBE3BF",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552DBE61_7312_4E28_41D9_856D6F2D82CB",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E78976_731D_F228_41C2_4D989DD00C46",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.68,
  "pitch": 0
 },
 "id": "camera_55636E06_7312_51E8_4183_A20F65C48541"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D90978_731D_F218_41D5_5E6D1FD4E465",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_55285E6A_7312_4E38_41CC_9477D71916DB",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_L_004",
 "id": "panorama_796A339F_7312_D618_41DC_0746EB01C19D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
   "backwardYaw": 76.15,
   "yaw": -16.1,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B171E_7312_BE18_41DC_83DF5B223129",
   "backwardYaw": -42.12,
   "yaw": 99.23,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79699D2C_7312_D239_41DA_FB741852B062",
   "backwardYaw": 37.31,
   "yaw": -56.4,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6283FE2D_7332_CE38_41C2_EFCBCD184936",
  "this.overlay_613CD621_7333_DE28_4183_FF02E5E6D683",
  "this.overlay_6182ABD4_7332_B668_418A_69EFBB198D1C",
  "this.overlay_61E2032C_7335_D638_41CB_B28AC1F0D232",
  "this.overlay_62F36A7D_7336_B618_41DA_DD8CCC9BF506",
  "this.overlay_614A390B_7336_D3F8_41B0_8336736FEDF0",
  "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 1205.2,
   "angle": 184.75,
   "y": 366.4,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.75,
  "pitch": 0
 },
 "id": "camera_56A0CDAB_7312_5238_41A6_DFB5AC6F68A0"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D81977_731D_F228_41BC_74D843F0E33C",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D82976_731D_F228_41CC_8B9EBD234069",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79684356_7312_F668_41A7_E5AA7E6C9811_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55342E53_7312_4E68_41CE_784961CB470D",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_7968C914_7312_53E8_41D8_2F2288F73D77_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5E96B_731D_F238_4152_987972D38D4D",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5A969_731D_F238_41D9_1D14654188D1",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_B_001",
 "id": "panorama_7968C914_7312_53E8_41D8_2F2288F73D77",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42",
   "backwardYaw": 33.92,
   "yaw": 123.48,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6B061B60_736D_D629_41A6_A7E5F148A492",
  "this.overlay_6B67D367_736E_7628_41D4_27B6AC0F0751",
  "this.panorama_7968C914_7312_53E8_41D8_2F2288F73D77_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 690.4,
   "angle": -83.66,
   "y": 1397.2,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8A979_731D_F218_41D1_B76D4AEE7D56",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_57A12ABF_7312_5618_41D9_1EC660EF84EA"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.42,
  "pitch": 2.08
 },
 "id": "panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_camera"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9C97B_731D_F218_41C4_0C0977E2A29E",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_552C3E62_7312_4E28_41DB_01D7F4189E59",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_S_001",
 "id": "panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42",
   "backwardYaw": -55.43,
   "yaw": -120.84,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6448B109_7376_B3F8_4195_5D32BBF8A4F1",
  "this.overlay_6BA03CAD_736E_5238_41AF_A32930585A6E",
  "this.panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 798.4,
   "angle": 180,
   "y": 1878.4,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.16,
  "pitch": 0
 },
 "id": "camera_55548E1F_7312_4E18_41BC_474FC2A58840"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552FBE5F_7312_4E18_41C5_713391F0AD23",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E4C966_731D_F228_41C8_875A75F0A604",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55277E6C_7312_4E38_41DA_4C2B5D42555C",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5532EE57_7312_4E68_41D4_E81B20E56A76",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.31,
  "pitch": 0
 },
 "id": "camera_56903DC2_7312_5268_41D1_09E50BB37D0D"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552EEE5F_7312_4E18_41CB_6BC7C5E6AA75",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552A0E68_7312_4E38_41B4_A5BC180007FF",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.76,
  "pitch": 0
 },
 "id": "camera_563D1C1B_7312_5218_41D0_39825D84A973"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55245E73_7312_4E28_416E_42B8AFFDF438",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6896E_731D_F238_41D2_1B39326F5BF8",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6D96D_731D_F238_4191_0C53D4419E46",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D5E5F_7312_4E18_41D8_B010674813DC",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D83972_731D_F228_41D5_420D16B76E00",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55286E6B_7312_4E38_41D2_B819991779AD",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D6E5F_7312_4E18_41D3_B12359812898",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5522DE75_7312_4E28_41DB_0FBE18A59740",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D89975_731D_F228_41C1_D7347A21C43A",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 123.6,
  "pitch": 0
 },
 "id": "camera_56CE9D5F_7312_5218_41D5_569714D257CF"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5525CE73_7312_4E28_41CB_E53B4EE6DAE5",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552C7E61_7312_4E28_418F_BC0D03BADE6E",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_57A1DABF_7312_5618_41D4_65D464421932"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D87973_731D_F228_41D1_1E047DA5DC4A",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 85.42,
  "pitch": 0
 },
 "id": "camera_55728DEF_7312_5238_41CE_FA0A87D41C86"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E78974_731D_F228_41D7_5F3B07702D14",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D84977_731D_F228_41CD_355613C2BDA6",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D84979_731D_F218_41CE_BAA208AC83E9",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.74,
  "pitch": 1.51
 },
 "id": "panorama_796A3870_7312_D228_41D3_E18DAAFD4655_camera"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E4B966_731D_F228_41C2_9E681A6883D8",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D0E61_7312_4E28_41A8_3AFFA08EBA9F",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5531BE5D_7312_4E18_41A7_67BD6AD8F9EA",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7D970_731D_F228_41D4_4416EDF82DCA",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E69971_731D_F228_41A1_2BD029ED1E50",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E4F968_731D_F238_41DA_F210DE516DFF",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6E96F_731D_F238_4174_DF881078FF02",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8D977_731D_F228_41D9_ECDDFF72968B",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5B96B_731D_F238_41CF_85790DFC65FE",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8B975_731D_F228_41CE_B8B5E497003C",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9A978_731D_F218_41DC_8A97337CE5B3",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55282E6B_7312_4E38_41DC_CDB4EA04A9C9",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E55967_731D_F228_41DB_B937DD0FDAD3",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552E2E60_7312_4E28_41CB_2323C7F2D09D",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.94,
  "pitch": 0
 },
 "id": "camera_56BECD7C_7312_5218_41DC_1ED2B4E028F4"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55286E6A_7312_4E38_41D2_D3579D2F0A40",
 "duration": 1000
},
{
 "thumbnailUrl": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_t.jpg",
 "height": 2160,
 "label": "Dup_Plan_Pers_001",
 "id": "map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345.jpeg",
    "width": 2160,
    "height": 2160
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_lq.jpeg",
    "width": 256,
    "height": 256,
    "tags": "preload"
   }
  ]
 },
 "width": 2160,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.1,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "overlays": [
  "this.overlay_6DDE6919_732E_5218_41D6_3DF1FC332E16",
  "this.overlay_6CB9ADA8_7312_B238_4184_308CA8507C32",
  "this.overlay_6DEE400C_7312_D1F8_41C9_B431D09F6C28",
  "this.overlay_6DDA628C_7312_D6F8_41D2_DD0828E79F30",
  "this.overlay_6DC6551F_7312_D218_41D3_7C6FA9CC634F",
  "this.overlay_6DB387CC_7312_DE78_41D7_3D7F74DDD4B1",
  "this.overlay_6DBC9A57_7312_D668_41D2_198B952A0D2B"
 ],
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#99FF00",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5532DE56_7312_4E68_41C0_A26EF5FE1096",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_79699D2C_7312_D239_41DA_FB741852B062_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D7E60_7312_4E28_41DB_8444DBBE1C1E",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.57,
  "pitch": 0
 },
 "id": "camera_564AEBF1_7312_5628_41D6_C859A18770A4"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E43965_731D_F228_41DC_18294133120A",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55334E54_7312_4E68_41B0_D6E3DB4FBCAA",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55289E6A_7312_4E38_41D9_B9F7BF14933C",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D88979_731D_F218_41D1_6E80F5E1EA6F",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9E97A_731D_F218_414B_7C5EA546299C",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6396C_731D_F238_41CD_98C460762C86",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552F5E5E_7312_4E18_41D1_7F150D36ED68",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_t.jpg",
 "class": "Panorama",
 "label": "P_L_008",
 "id": "panorama_79684356_7312_F668_41A7_E5AA7E6C9811",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79699D2C_7312_D239_41DA_FB741852B062",
   "backwardYaw": -62.69,
   "yaw": 38.06,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9",
   "backwardYaw": 109.16,
   "yaw": -104.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641",
   "backwardYaw": -94.58,
   "yaw": -88.05,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6760C80C_733E_B1F8_41D6_8721E1DCF682",
  "this.overlay_670E8141_733E_5268_41C2_E683CD69B5AD",
  "this.overlay_65DAF862_7373_D228_41B1_956C21F9D7AB",
  "this.overlay_65E5737A_7372_D618_41BB_F9F028D477C0",
  "this.overlay_643EAD82_737E_B2E8_41BD_64BF300865CC",
  "this.overlay_6592102A_737E_7238_41C8_D81B34F9D472",
  "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E53969_731D_F238_41CB_A77324AF43DC",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5524AE74_7312_4E28_41D6_D8827939E456",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55293E69_7312_4E38_41D4_CFB3A5F4FF15",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55269E6D_7312_4E38_41C0_0251F2454EB3",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E48968_731D_F238_41BE_DF9DA30B4192",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55230E76_7312_4E28_41D0_EB162529B19F",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D96978_731D_F218_41C2_47B2936276A3",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.71,
  "pitch": -2.83
 },
 "id": "panorama_796A339F_7312_D618_41DC_0746EB01C19D_camera"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_55263E6C_7312_4E38_41DA_4AE9F5AC386A",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E75970_731D_F228_41CC_8C6E6E25C99F",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D9E60_7312_4E28_41C0_218E13FC5FBA",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7C972_731D_F228_41C0_A424C4752CC6",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9697A_731D_F218_41D2_FCFA1E92D786",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E79972_731D_F228_41BD_35993409E659",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D93979_731D_F21B_41AA_0E5FFC982E64",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5530FE5D_7312_4E18_41DB_0CD3332C4437",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55313E56_7312_4E68_41D1_77BCC60C08F7",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D81973_731D_F228_419D_D16DB1D44486",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55230E74_7312_4E28_41CC_40C4E8AA036E",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.08,
  "pitch": 0
 },
 "id": "camera_55357E52_7312_4E68_41A6_AD67BE45B0E1"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9497A_731D_F218_41D9_9DAD79E506DD",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5523EE74_7312_4E28_41D3_69976AC8568A",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.72,
  "pitch": 0
 },
 "id": "camera_5677CB57_7312_5668_41CE_440EB1BCE846"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552BBE68_7312_4E38_41D7_0AEAA6619DF3",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55344E53_7312_4E68_41AE_2E1249BF97DF",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5526CE6D_7312_4E38_41D2_8BBD1470CE5A",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.32,
  "pitch": 0
 },
 "id": "camera_566D9B7E_7312_5618_41DC_388E349A2E43"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.62,
  "pitch": -2.74
 },
 "id": "panorama_7964D23B_7312_B618_41D7_78D43983BC42_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55240E73_7312_4E28_41A7_BAAB31056B33",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D82974_731D_F228_41CD_A912A3A84F80",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_L_001",
 "id": "panorama_7964D23B_7312_B618_41D7_78D43983BC42",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
   "backwardYaw": -128.32,
   "yaw": 85.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791",
   "backwardYaw": -120.84,
   "yaw": -55.43,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7968C914_7312_53E8_41D8_2F2288F73D77",
   "backwardYaw": 123.48,
   "yaw": 33.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7E91B0B3_731E_5228_41B9_FFBD45EF6D21",
  "this.overlay_613839E0_732D_D228_41AB_4C0627537C90",
  "this.overlay_6B136E23_736E_CE28_41DC_4E287D596E2A",
  "this.overlay_6A53FE9A_736E_4E18_41D9_4A5F3483BD37",
  "this.overlay_6B7CDBEA_7312_5638_41B5_F2498E5625DC",
  "this.overlay_692F60A2_7312_5228_41AB_5BBBC78A5F61",
  "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 1212.4,
   "angle": -91.88,
   "y": 1604.8,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.69,
  "pitch": 0
 },
 "id": "camera_56FABCE8_7312_5238_417A_D028895394B1"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552DEE61_7312_4E28_41B1_FD756EF0D2C1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6696A_731D_F238_41BE_F28665393459",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55348E54_7312_4E68_41D0_C2DDA1A95B74",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5532AE57_7312_4E68_41C4_190C46B1CEDD",
 "duration": 1000
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_57A0DABF_7312_5618_41D1_A9581B5AF657",
  "this.PanoramaPlayListItem_579F1AC0_7312_5668_41BF_4B32B4E640FA",
  "this.PanoramaPlayListItem_579FAAC0_7312_5668_41D4_3CFE444BBAC9",
  "this.PanoramaPlayListItem_579EDAC0_7312_5668_41DB_22378831B5C4",
  "this.PanoramaPlayListItem_579E9AC6_7312_5668_41D6_002E52FDA90C",
  {
   "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E6E96F_731D_F238_4174_DF881078FF02, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E6D96F_731D_F238_41D5_100782FB9C1F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E7396F_731D_F238_41D1_D9E370017EA4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E7696F_731D_F238_41DA_FC5E4C19DC24, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E75970_731D_F228_41CC_8C6E6E25C99F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E7E970_731D_F228_41CE_C08CFA1ADEB9, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E7D970_731D_F228_41D4_4416EDF82DCA, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_53D83970_731D_F228_41D8_6B48C0E250B0, 'showEffect', false)",
   "media": "this.panorama_79699D2C_7312_D239_41DA_FB741852B062",
   "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_552EAE60_7312_4E28_41D2_0B2D5BE3ED5B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E6E96F_731D_F238_4174_DF881078FF02, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_552D7E60_7312_4E28_41DB_8444DBBE1C1E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E6D96F_731D_F238_41D5_100782FB9C1F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_552D0E61_7312_4E28_41A8_3AFFA08EBA9F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E7396F_731D_F238_41D1_D9E370017EA4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_552DDE61_7312_4E28_41D3_E3E8DDC96C28, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E7696F_731D_F238_41DA_FC5E4C19DC24, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_552DEE61_7312_4E28_41B1_FD756EF0D2C1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E75970_731D_F228_41CC_8C6E6E25C99F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_552DBE61_7312_4E28_41D9_856D6F2D82CB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E7E970_731D_F228_41CE_C08CFA1ADEB9, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_552C7E61_7312_4E28_418F_BC0D03BADE6E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E7D970_731D_F228_41D4_4416EDF82DCA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_53D83970_731D_F228_41D8_6B48C0E250B0, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_552C3E62_7312_4E28_41DB_01D7F4189E59, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
   "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_79699D2C_7312_D239_41DA_FB741852B062_camera"
  },
  {
   "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E69971_731D_F228_41A1_2BD029ED1E50, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E6F971_731D_F228_41D3_A7975848E329, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E6D971_731D_F228_41C1_837982A42DB5, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E73971_731D_F228_41D4_3B281CA95597, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E76971_731D_F228_41D9_622E86487B48, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E75971_731D_F228_41D3_2A4743984C24, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E79972_731D_F228_41BD_35993409E659, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_53E7C972_731D_F228_41C0_A424C4752CC6, 'showEffect', false)",
   "media": "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811",
   "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_552CAE62_7312_4E28_41D5_E73AF36E7CC1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E69971_731D_F228_41A1_2BD029ED1E50, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_552B6E62_7312_4E2D_41B1_45C3B7ED634C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E6F971_731D_F228_41D3_A7975848E329, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_552B0E67_7312_4E28_41CD_0A7F2EBCEF50, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E6D971_731D_F228_41C1_837982A42DB5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_552BCE68_7312_4E38_41D6_DC3AE187F4B6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E73971_731D_F228_41D4_3B281CA95597, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_552BBE68_7312_4E38_41D7_0AEAA6619DF3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E76971_731D_F228_41D9_622E86487B48, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_552A4E68_7312_4E38_41D7_7A6C66C5B8CB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E75971_731D_F228_41D3_2A4743984C24, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_552A0E68_7312_4E38_41B4_A5BC180007FF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E79972_731D_F228_41BD_35993409E659, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_53E7C972_731D_F228_41C0_A424C4752CC6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_552ADE68_7312_4E38_41D5_AE15601EEB49, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
   "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811_camera"
  },
  {
   "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D83972_731D_F228_41D5_420D16B76E00, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D81973_731D_F228_419D_D16DB1D44486, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D87973_731D_F228_41D1_1E047DA5DC4A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D8A973_731D_F228_41D5_3F1ECACCBB0D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_53E70973_731D_F228_41B2_9E4FC20F54DE, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E77973_731D_F228_41CA_22CD21F3D5BB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E75974_731D_F228_41BF_712026843F5A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E78974_731D_F228_41D7_5F3B07702D14, 'hideEffect', false)",
   "media": "this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641",
   "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_55295E69_7312_4E38_41B1_8FF3C3861158, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D83972_731D_F228_41D5_420D16B76E00, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55296E69_7312_4E38_41DB_E5D3E45E9053, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D81973_731D_F228_419D_D16DB1D44486, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55293E69_7312_4E38_41D4_CFB3A5F4FF15, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D87973_731D_F228_41D1_1E047DA5DC4A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_5529FE69_7312_4E38_41D2_341AB945FF57, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D8A973_731D_F228_41D5_3F1ECACCBB0D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_53E70973_731D_F228_41B2_9E4FC20F54DE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_55285E6A_7312_4E38_41CC_9477D71916DB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55286E6A_7312_4E38_41D2_D3579D2F0A40, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E77973_731D_F228_41CA_22CD21F3D5BB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_55282E6A_7312_4E38_41D2_751F0A653E28, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E75974_731D_F228_41BF_712026843F5A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55289E6A_7312_4E38_41D9_B9F7BF14933C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E78974_731D_F228_41D7_5F3B07702D14, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
   "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641_camera"
  },
  {
   "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E7E974_731D_F228_41CA_2B1B695BCB24, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D82974_731D_F228_41CD_A912A3A84F80, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D81975_731D_F228_41D1_85EEC9EBE3BF, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D84975_731D_F228_41D8_6FC082FA2DDD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D8B975_731D_F228_41CE_B8B5E497003C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_53D89975_731D_F228_41C1_D7347A21C43A, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53D8F975_731D_F228_41D4_9556BA0FE374, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D92976_731D_F228_4154_E7ED2A0B9883, 'hideEffect', false)",
   "media": "this.panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9",
   "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_5529CE6A_7312_4E38_41D2_C0EFBC7FE802, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E7E974_731D_F228_41CA_2B1B695BCB24, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55298E6B_7312_4E38_41DB_D0C7F7D97D04, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D82974_731D_F228_41CD_A912A3A84F80, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55285E6B_7312_4E38_41CA_DAF146A72831, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D81975_731D_F228_41D1_85EEC9EBE3BF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_55286E6B_7312_4E38_41D2_B819991779AD, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D84975_731D_F228_41D8_6FC082FA2DDD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_55282E6B_7312_4E38_41DC_CDB4EA04A9C9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D8B975_731D_F228_41CE_B8B5E497003C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_53D89975_731D_F228_41C1_D7347A21C43A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_5528CE6B_7312_4E38_41C4_AA27F2F9DA88, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_55288E6B_7312_4E38_41D4_9F06E08EBABF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53D8F975_731D_F228_41D4_9556BA0FE374, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55277E6C_7312_4E38_41DA_4C2B5D42555C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D92976_731D_F228_4154_E7ED2A0B9883, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
   "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_camera"
  },
  "this.PanoramaPlayListItem_579B0AC9_7312_5678_41C2_364604B41418",
  {
   "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D90978_731D_F218_41D5_5E6D1FD4E465, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D96978_731D_F218_41C2_47B2936276A3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D9A978_731D_F218_41DC_8A97337CE5B3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D9E978_731D_F218_41BF_3581A18A9181, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D84979_731D_F218_41CE_BAA208AC83E9, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D8A979_731D_F218_41D1_B76D4AEE7D56, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_53D88979_731D_F218_41D1_6E80F5E1EA6F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D8C979_731D_F218_41C1_B3ADDB26808A, 'hideEffect', false)",
   "media": "this.panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D",
   "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_5525CE73_7312_4E28_41CB_E53B4EE6DAE5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D90978_731D_F218_41D5_5E6D1FD4E465, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55245E73_7312_4E28_416E_42B8AFFDF438, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D96978_731D_F218_41C2_47B2936276A3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55240E73_7312_4E28_41A7_BAAB31056B33, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D9A978_731D_F218_41DC_8A97337CE5B3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_5524DE73_7312_4E28_41B0_4BA7C89289D8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D9E978_731D_F218_41BF_3581A18A9181, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_5524EE74_7312_4E28_41BE_F74C034EADBE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D84979_731D_F218_41CE_BAA208AC83E9, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_5524AE74_7312_4E28_41D6_D8827939E456, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D8A979_731D_F218_41D1_B76D4AEE7D56, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_53D88979_731D_F218_41D1_6E80F5E1EA6F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_55234E74_7312_4E28_41C5_C07F3B030993, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55230E74_7312_4E28_41CC_40C4E8AA036E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D8C979_731D_F218_41C1_B3ADDB26808A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
   "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_camera"
  },
  "this.PanoramaPlayListItem_579A3ACA_7312_5678_41B4_DD79700C835B"
 ],
 "id": "mainPlayList"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55282E6A_7312_4E38_41D2_751F0A653E28",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E4D96B_731D_F238_41CF_202F72A50675",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5529CE6A_7312_4E38_41D2_C0EFBC7FE802",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_t.jpg",
 "class": "Panorama",
 "label": "P_B_002",
 "id": "panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811",
   "backwardYaw": -104.26,
   "yaw": 109.16,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_656A3A92_7372_76E8_41B6_06F26954FCF9",
  "this.overlay_653F8E69_7372_CE38_41D0_995FB0DA4D89",
  "this.panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_552ADE68_7312_4E38_41D5_AE15601EEB49",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5B967_731D_F228_4181_0246ECC20EF9",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9E978_731D_F218_41BF_3581A18A9181",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_camera"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E73971_731D_F228_41D4_3B281CA95597",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_55234E74_7312_4E28_41C5_C07F3B030993",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55316E57_7312_4E68_419D_993E3BB33F29",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8F977_731D_F228_41D8_E5EDDCC8A070",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.77,
  "pitch": 0
 },
 "id": "camera_56DC3D3A_7312_5218_41DA_E80370CD303C"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55226E75_7312_4E28_41DC_13601DA94B8E",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55267E6C_7312_4E38_41D5_E76742317F4B",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7096D_731D_F238_41C7_D13FB2AEFF66",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552F9E5E_7312_4E18_41B0_9C718CAEF6AB",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5523CE76_7312_4E28_41D9_3114553C9B2B",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E75974_731D_F228_41BF_712026843F5A",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E51967_731D_F228_41D9_C97125A725E7",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.32,
  "pitch": 0
 },
 "id": "camera_56610BA6_7312_5628_41D5_EF134D163394"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5196B_731D_F238_4165_58E834F839F8",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.85,
  "pitch": 0
 },
 "id": "camera_56191C98_7312_5218_41CA_7E06C42DCF03"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7596E_731D_F238_41DA_8D681B1FE1AC",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D9897A_731D_F218_41C0_0B8564613EE1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53DA497B_731D_F218_41BA_78075EB67A91",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5523EE76_7312_4E28_41CF_2E7C12256FD9",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E58969_731D_F238_41C7_3DE863EA3E6A",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "P_L_003",
 "id": "panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42",
   "backwardYaw": 85.03,
   "yaw": -128.32,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D",
   "backwardYaw": -16.1,
   "yaw": 76.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796B171E_7312_BE18_41DC_83DF5B223129",
   "backwardYaw": 49.28,
   "yaw": -21.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655",
   "backwardYaw": 139.68,
   "yaw": -171.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655",
   "backwardYaw": 139.68,
   "yaw": 171.96,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7D70109D_7312_B218_41D3_B841D39977CE",
  "this.overlay_7DAF238D_7312_76F8_41D9_67EDE848138A",
  "this.overlay_7D825E3D_7312_4E18_41C5_B5962063F0E5",
  "this.overlay_7C757A7C_7316_5618_41CE_1619100BA3CB",
  "this.overlay_7D87755E_7317_D218_41D8_267F1B6CC00E",
  "this.overlay_7C4CA33C_7315_F618_41C0_8679FE3DA0DF",
  "this.overlay_7CBDEDC1_7312_5268_41CC_BAB15ECC18C2",
  "this.overlay_7CDA5F47_7312_4E68_41C5_74206E2F3739",
  "this.overlay_63BF9761_7312_5E28_41D8_B06962BDA2AD",
  "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_tcap0"
 ],
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345",
   "x": 1212.4,
   "angle": -66.05,
   "y": 1052.8,
   "class": "PanoramaMapLocation"
  }
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55236E75_7312_4E28_41CD_7E00762A73F1",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E77973_731D_F228_41CA_22CD21F3D5BB",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55316E56_7312_4E68_41D4_A71CE7E9E84B",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6B96C_731D_F238_41D3_33548AF0DA14",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.9,
  "pitch": 0
 },
 "id": "camera_57817B2B_7312_5638_4180_56D00CE99A14"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5528CE6B_7312_4E38_41C4_AA27F2F9DA88",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5527FE6C_7312_4E38_41C0_DEAB2F26BA55",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55312E57_7312_4E68_41D1_29A7FFDDBD26",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8A973_731D_F228_41D5_3F1ECACCBB0D",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E49966_731D_F228_41BA_4C3ACE0950B8",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55278E6C_7312_4E38_41D8_738BF8487AB3",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E70973_731D_F228_41B2_9E4FC20F54DE",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5535BE53_7312_4E68_41D8_88C8E426D42A",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552FDE5E_7312_4E18_41D3_C38820DE1193",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.75,
  "pitch": 0
 },
 "id": "camera_56AF5D93_7312_52E8_41C8_2CDC469957DB"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E52966_731D_F228_41CA_C48B02799E3D",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.88,
  "pitch": 0
 },
 "id": "camera_560AACC0_7312_5268_4176_979049C83DE8"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552E2E5F_7312_4E18_41C6_1CC66321F4A5",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E51969_731D_F238_41D7_ECF6BA46140C",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_5533AE55_7312_4E68_41C6_5E2CDFEEFC03",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5D96C_731D_F238_41D4_EB06B85FE63D",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552B0E67_7312_4E28_41CD_0A7F2EBCEF50",
 "duration": 1000
},
{
 "thumbnailUrl": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_t.jpg",
 "class": "Panorama",
 "label": "P_L_006",
 "id": "panorama_79699D2C_7312_D239_41DA_FB741852B062",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D",
   "backwardYaw": -56.4,
   "yaw": 37.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811",
   "backwardYaw": 38.06,
   "yaw": -62.69,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6957ED8A_7376_72F8_41DB_FC8BFFCCE2EB",
  "this.overlay_65A2B868_7376_7238_41D9_7007E2D0F380",
  "this.overlay_6482A491_7375_D2E8_41DB_4B65E5FED08F",
  "this.overlay_659A041F_7372_F218_41C8_C32619C75953",
  "this.panorama_79699D2C_7312_D239_41DA_FB741852B062_tcap0"
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D8F975_731D_F228_41D4_9556BA0FE374",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_552D2E5F_7312_4E18_41D9_07A051B7AC61",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D92976_731D_F228_4154_E7ED2A0B9883",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55255E72_7312_4E28_41DB_8F42B5EA0723",
 "duration": 1000
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_camera"
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53D83970_731D_F228_41D8_6B48C0E250B0",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6F971_731D_F228_41D3_A7975848E329",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55295E69_7312_4E38_41B1_8FF3C3861158",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E45968_731D_F238_41C5_0F4E239FBF31",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E5D96A_731D_F238_41B0_B60F6F26F9E5",
 "duration": 1000
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E7396F_731D_F238_41D1_D9E370017EA4",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5524EE74_7312_4E28_41BE_F74C034EADBE",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_5533EE54_7312_4E68_41C6_CF199C5CD988",
 "duration": 1000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in_out",
 "id": "effect_55303E5D_7312_4E18_41C4_95AA286B7C50",
 "duration": 1000
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_in_out",
 "id": "effect_53E6F96D_731D_F238_41BC_7762D404A5AF",
 "duration": 1000
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "minHeight": 1,
 "width": 115.05,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 641,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "left": "0%",
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "minHeight": 1,
 "backgroundOpacity": 0.64,
 "shadow": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": "0.06%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "24.125%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "37.622%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "bottom": "7.14%",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "visible": false,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "left": "2.23%",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "height": 47,
 "top": "4.76%",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "7.901%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "5.081%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Kitchen"
 },
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "7.057%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.973%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 1"
 },
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 2"
 },
 "id": "HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bedroom 3"
 },
 "id": "HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "6.996%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "4.432%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bedroom 3</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Hallway"
 },
 "id": "HTMLText_6D10649B_7332_5218_41D2_21101FE2809C",
 "left": "2.11%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "top": "5.19%",
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "width": "12.364%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "6.811%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:15px;font-family:'Montserrat';\"><B>Hallway</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641, this.camera_563D1C1B_7312_5218_41D0_39825D84A973); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6BFD5CE1_7376_7228_41BA_442AA8A074BE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0_HS_0_1_0_map.gif",
      "width": 82,
      "height": 200
     }
    ]
   },
   "pitch": -5.82,
   "hfov": 38.44
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -81.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0_HS_1_0.png",
      "width": 58,
      "height": 109
     }
    ]
   },
   "pitch": 9.33
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6B6F97D0_736F_DE68_41D6_EC3C833A99AC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 30
     }
    ]
   },
   "pitch": 9.33,
   "hfov": 7.66
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA, this.camera_56AF5D93_7312_52E8_41C8_2CDC469957DB); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6076163B_733E_5E18_41D3_215FDA87B9FA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6969044E_7332_7278_41D9_86D4FCDF3E5D",
   "pitch": -9.69,
   "yaw": 126.63,
   "hfov": 5.92,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_60E75300_733E_B7E8_41D0_BAECBABA8DF4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.69,
   "hfov": 5.92
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA, this.camera_56A0CDAB_7312_5238_41A6_DFB5AC6F68A0); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_673C9774_733F_DE28_41D9_7E4A397A08FB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_2_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_2_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796A3870_7312_D228_41D3_E18DAAFD4655_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA, this.camera_56ECBD10_7312_53E8_4164_E314BC0252F4); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6168CA3C_7335_B618_41DB_F335B241F982",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 172
     }
    ]
   },
   "pitch": -1.73,
   "hfov": 95.54
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6270FC_7315_D218_41CB_57272841C458",
   "pitch": -3.29,
   "yaw": 29.64,
   "hfov": 3.42,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_60145E7D_7333_CE18_41DC_2DEC62C8D69E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.29,
   "hfov": 3.42
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796A339F_7312_D618_41DC_0746EB01C19D, this.camera_56DC3D3A_7312_5218_41DA_E80370CD303C); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_67E70CE5_7332_D228_41D0_CD3455EEF11F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_2_1_0_map.gif",
      "width": 164,
      "height": 200
     }
    ]
   },
   "pitch": -2.44,
   "hfov": 70.47
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6280FD_7315_D218_41CF_F61327255C30",
   "pitch": -2.6,
   "yaw": -25.46,
   "hfov": 3.51,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_671C9441_733D_D268_41D4_2F8489875C89",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.6,
   "hfov": 3.51
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796B171E_7312_BE18_41DC_83DF5B223129_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811, this.camera_56251C6C_7312_5238_41D5_7FD886638B21); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_65A56BAB_7332_B638_41D3_7B12C89A5741",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_0_1_0_map.gif",
      "width": 66,
      "height": 180
     }
    ]
   },
   "pitch": -1.82,
   "hfov": 14.7
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796C7734_7312_7E28_41C6_F1E22C5AD88D, this.camera_5632FC44_7312_5268_41AB_439A1D543014); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_65AF5EA2_7372_4E28_41B1_DF52B9CBE4D2",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_1_1_0_map.gif",
      "width": 62,
      "height": 200
     }
    ]
   },
   "pitch": -2.06,
   "hfov": 23.1
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -79.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.5,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_2_0.png",
      "width": 59,
      "height": 81
     }
    ]
   },
   "pitch": 9.43
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_64EE43B1_7373_D628_419F_1EED138261F3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": 9.43,
   "hfov": 6.5
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6070FF_7315_D218_41CC_E6F74D59A555",
   "pitch": 7.97,
   "yaw": -93.49,
   "hfov": 5.23,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6484D01B_7372_5218_41AE_9EB169A1E7ED",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.97,
   "hfov": 5.23
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_79609481_7312_52E8_41B6_BB22EBE8A641_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79699D2C_7312_D239_41DA_FB741852B062, this.camera_56FABCE8_7312_5238_417A_D028895394B1); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6283FE2D_7332_CE38_41C2_EFCBCD184936",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 131
     }
    ]
   },
   "pitch": 21.99,
   "hfov": 142.08
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_696BB44D_7332_7278_41D9_A27B439F66A5",
   "pitch": 26.02,
   "yaw": -39.55,
   "hfov": 4.28,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_613CD621_7333_DE28_4183_FF02E5E6D683",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 26.02,
   "hfov": 4.28
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796B171E_7312_BE18_41DC_83DF5B223129, this.camera_560AACC0_7312_5268_4176_979049C83DE8); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6182ABD4_7332_B668_418A_69EFBB198D1C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_2_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_2_3_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_2_4_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_2_5_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_696B044D_7332_7278_41D6_5E3C18C4BD6B",
   "pitch": -7.29,
   "yaw": 76.44,
   "hfov": 4.88,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_61E2032C_7335_D638_41CB_B28AC1F0D232",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.29,
   "hfov": 4.88
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA, this.camera_56191C98_7312_5218_41CA_7E06C42DCF03); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_62F36A7D_7336_B618_41DA_DD8CCC9BF506",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 170
     }
    ]
   },
   "pitch": -15.83,
   "hfov": 92.04
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6230FC_7315_D218_41D0_64F37EA5AA53",
   "pitch": -0.55,
   "yaw": 0.35,
   "hfov": 3.81,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_614A390B_7336_D3F8_41B0_8336736FEDF0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.55,
   "hfov": 3.81
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796A339F_7312_D618_41DC_0746EB01C19D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7964D23B_7312_B618_41D7_78D43983BC42, this.camera_55357E52_7312_4E68_41A6_AD67BE45B0E1); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6B061B60_736D_D629_41A6_A7E5F148A492",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0_HS_0_1_0_map.gif",
      "width": 38,
      "height": 200
     }
    ]
   },
   "pitch": -5.46,
   "hfov": 24.97
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B60C0FF_7315_D218_41DA_E61F50EC2B1C",
   "pitch": 9.05,
   "yaw": 128.93,
   "hfov": 8.3,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6B67D367_736E_7628_41D4_27B6AC0F0751",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.05,
   "hfov": 8.3
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_7968C914_7312_53E8_41D8_2F2288F73D77_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7964D23B_7312_B618_41D7_78D43983BC42, this.camera_564AEBF1_7312_5628_41D6_C859A18770A4); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6448B109_7376_B3F8_4195_5D32BBF8A4F1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_0_2_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -113.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_1_0.png",
      "width": 93,
      "height": 161
     }
    ]
   },
   "pitch": 21.74
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6BA03CAD_736E_5238_41AF_A32930585A6E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 21.74,
   "hfov": 9.67
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "map": {
  "width": 92,
  "x": 1166.4,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_0_map.gif",
     "width": 16,
     "height": 24
    }
   ]
  },
  "y": 1533.6,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 142.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 1166.4,
  "y": 1533.6,
  "class": "HotspotMapOverlayImage",
  "width": 92,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_0.png",
     "width": 92,
     "height": 142
    }
   ]
  },
  "height": 142.4
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DDE6919_732E_5218_41D6_3DF1FC332E16",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 84.8,
  "x": 1521.6,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_1_map.gif",
     "width": 16,
     "height": 26
    }
   ]
  },
  "y": 1087.2,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 137.6,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 1521.6,
  "y": 1087.2,
  "class": "HotspotMapOverlayImage",
  "width": 84.8,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_1.png",
     "width": 84,
     "height": 137
    }
   ]
  },
  "height": 137.6
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6CB9ADA8_7312_B238_4184_308CA8507C32",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 82.4,
  "x": 396,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_2_map.gif",
     "width": 16,
     "height": 30
    }
   ]
  },
  "y": 592.8,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 154.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 396,
  "y": 592.8,
  "class": "HotspotMapOverlayImage",
  "width": 82.4,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_2.png",
     "width": 82,
     "height": 154
    }
   ]
  },
  "height": 154.4
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DEE400C_7312_D1F8_41C9_B431D09F6C28",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 87.2,
  "x": 1161.6,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_3_map.gif",
     "width": 16,
     "height": 26
    }
   ]
  },
  "y": 295.2,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 142.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 1161.6,
  "y": 295.2,
  "class": "HotspotMapOverlayImage",
  "width": 87.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_3.png",
     "width": 87,
     "height": 142
    }
   ]
  },
  "height": 142.4
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DDA628C_7312_D6F8_41D2_DD0828E79F30",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 89.6,
  "x": 753.6,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_4_map.gif",
     "width": 16,
     "height": 28
    }
   ]
  },
  "y": 1800,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 156.8,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 753.6,
  "y": 1800,
  "class": "HotspotMapOverlayImage",
  "width": 89.6,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_4.png",
     "width": 89,
     "height": 156
    }
   ]
  },
  "height": 156.8
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DC6551F_7312_D218_41D3_7C6FA9CC634F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 87.2,
  "x": 1168.8,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_5_map.gif",
     "width": 16,
     "height": 27
    }
   ]
  },
  "y": 979.2,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 147.2,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 1168.8,
  "y": 979.2,
  "class": "HotspotMapOverlayImage",
  "width": 87.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_5.png",
     "width": 87,
     "height": 147
    }
   ]
  },
  "height": 147.2
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DB387CC_7312_DE78_41D7_3D7F74DDD4B1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 80,
  "x": 650.4,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_6_map.gif",
     "width": 16,
     "height": 30
    }
   ]
  },
  "y": 1320,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 154.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "image": {
  "x": 650.4,
  "y": 1320,
  "class": "HotspotMapOverlayImage",
  "width": 80,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/map_6CE68EB0_732E_4E28_41CC_FAE8FFECB345_HS_6.png",
     "width": 80,
     "height": 154
    }
   ]
  },
  "height": 154.4
 },
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_6DBC9A57_7312_D668_41D2_198B952A0D2B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79699D2C_7312_D239_41DA_FB741852B062, this.camera_56903DC2_7312_5268_41D1_09E50BB37D0D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6760C80C_733E_B1F8_41D6_8721E1DCF682",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6390FE_7315_D218_41CB_3C1A18B85080",
   "pitch": -6.19,
   "yaw": 49.88,
   "hfov": 5.53,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_670E8141_733E_5268_41C2_E683CD69B5AD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.19,
   "hfov": 5.53
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79609481_7312_52E8_41B6_BB22EBE8A641, this.camera_55728DEF_7312_5238_41CE_FA0A87D41C86); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_65DAF862_7373_D228_41B1_956C21F9D7AB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_2_1_0_map.gif",
      "width": 35,
      "height": 200
     }
    ]
   },
   "pitch": -8.35,
   "hfov": 12.27
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B63D0FE_7315_D218_41D2_D7D1C0CC1D8B",
   "pitch": 3.67,
   "yaw": -88.81,
   "hfov": 4.42,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_65E5737A_7372_D618_41BB_F9F028D477C0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.67,
   "hfov": 4.42
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9, this.camera_5682BDD9_7312_5218_41C5_3678D17B7768); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_643EAD82_737E_B2E8_41BD_64BF300865CC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_4_1_6_map.gif",
      "width": 74,
      "height": 200
     }
    ]
   },
   "pitch": -7.47,
   "hfov": 21.17
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6010FE_7315_D218_41DC_58D58D5C6200",
   "pitch": 4.04,
   "yaw": -103.75,
   "hfov": 4.54,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6592102A_737E_7238_41C8_D81B34F9D472",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.04,
   "hfov": 4.54
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_79684356_7312_F668_41A7_E5AA7E6C9811_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA, this.camera_55636E06_7312_51E8_4183_A20F65C48541); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7E91B0B3_731E_5228_41B9_FFBD45EF6D21",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_0_1_0_map.gif",
      "width": 132,
      "height": 200
     }
    ]
   },
   "pitch": 8.45,
   "hfov": 92.21
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6490FA_7315_D218_41D9_6641ED84280C",
   "pitch": -0.07,
   "yaw": 90.45,
   "hfov": 4.31,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_613839E0_732D_D228_41AB_4C0627537C90",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.07,
   "hfov": 4.31
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -57.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_3_0.png",
      "width": 63,
      "height": 104
     }
    ]
   },
   "pitch": 12.01
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6B136E23_736E_CE28_41DC_4E287D596E2A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 12.01,
   "hfov": 6.89
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B64A0FB_7315_D218_4194_82C69D253619",
   "pitch": 12.86,
   "yaw": 35.37,
   "hfov": 5.81,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6A53FE9A_736E_4E18_41D9_4A5F3483BD37",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.86,
   "hfov": 5.81
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7968C914_7312_53E8_41D8_2F2288F73D77, this.camera_5544CE3B_7312_4E18_41C0_A6D7680C81E8); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6B7CDBEA_7312_5638_41B5_F2498E5625DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_5_1_0_map.gif",
      "width": 68,
      "height": 200
     }
    ]
   },
   "pitch": -1.71,
   "hfov": 27.57
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791, this.camera_55548E1F_7312_4E18_41BC_474FC2A58840); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_692F60A2_7312_5228_41AB_5BBBC78A5F61",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_6_1_0_map.gif",
      "width": 57,
      "height": 200
     }
    ]
   },
   "pitch": -1.77,
   "hfov": 22.31
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_57A0DABF_7312_5618_41D1_A9581B5AF657, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_53E43965_731D_F228_41DC_18294133120A, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E4B966_731D_F228_41C2_9E681A6883D8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E49966_731D_F228_41BA_4C3ACE0950B8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E4C966_731D_F228_41C8_875A75F0A604, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E52966_731D_F228_41CA_C48B02799E3D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E51967_731D_F228_41D9_C97125A725E7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E55967_731D_F228_41DB_B937DD0FDAD3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5B967_731D_F228_4181_0246ECC20EF9, 'hideEffect', false)",
 "media": "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42",
 "camera": "this.panorama_7964D23B_7312_B618_41D7_78D43983BC42_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_53E43965_731D_F228_41DC_18294133120A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_5535BE53_7312_4E68_41D8_88C8E426D42A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55344E53_7312_4E68_41AE_2E1249BF97DF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E4B966_731D_F228_41C2_9E681A6883D8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55346E53_7312_4E68_41DA_1B4550B69C15, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E49966_731D_F228_41BA_4C3ACE0950B8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_55342E53_7312_4E68_41CE_784961CB470D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E4C966_731D_F228_41C8_875A75F0A604, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_5534DE53_7312_4E6F_4192_2B4A879F5623, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E52966_731D_F228_41CA_C48B02799E3D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55348E54_7312_4E68_41D0_C2DDA1A95B74, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E51967_731D_F228_41D9_C97125A725E7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_55334E54_7312_4E68_41B0_D6E3DB4FBCAA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E55967_731D_F228_41DB_B937DD0FDAD3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55336E54_7312_4E68_41D5_E44B5ABE9E55, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5B967_731D_F228_4181_0246ECC20EF9, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_57A0DABF_7312_5618_41D1_A9581B5AF657"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579F1AC0_7312_5668_41BF_4B32B4E640FA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E5F967_731D_F228_41D7_168322B9E8FA, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E45968_731D_F238_41C5_0F4E239FBF31, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E48968_731D_F238_41BE_DF9DA30B4192, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E4F968_731D_F238_41DA_F210DE516DFF, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E4D969_731D_F238_41DA_CD77754F496E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E53969_731D_F238_41CB_A77324AF43DC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E51969_731D_F238_41D7_ECF6BA46140C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5A969_731D_F238_41D9_1D14654188D1, 'hideEffect', false)",
 "media": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA",
 "camera": "this.panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_5533EE54_7312_4E68_41C6_CF199C5CD988, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E5F967_731D_F228_41D7_168322B9E8FA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E45968_731D_F238_41C5_0F4E239FBF31, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_5533AE55_7312_4E68_41C6_5E2CDFEEFC03, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55327E55_7312_4E68_419A_B412B57C6B87, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E48968_731D_F238_41BE_DF9DA30B4192, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_55321E55_7312_4E68_41B3_816CAB45F553, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E4F968_731D_F238_41DA_F210DE516DFF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_55322E55_7312_4E68_41A5_EF842BA0A93C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E4D969_731D_F238_41DA_CD77754F496E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55329E55_7312_4E68_41D1_F0CC3DFEEDE6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E53969_731D_F238_41CB_A77324AF43DC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_55316E56_7312_4E68_41D4_A71CE7E9E84B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E51969_731D_F238_41D7_ECF6BA46140C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55313E56_7312_4E68_41D1_77BCC60C08F7, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5A969_731D_F238_41D9_1D14654188D1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579F1AC0_7312_5668_41BF_4B32B4E640FA"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579FAAC0_7312_5668_41D4_3CFE444BBAC9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E58969_731D_F238_41C7_3DE863EA3E6A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E5F96A_731D_F238_41D3_CA31D928DA30, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E5D96A_731D_F238_41B0_B60F6F26F9E5, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E6396A_731D_F238_41C8_1933F397EA36, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6696A_731D_F238_41BE_F28665393459, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E4D96B_731D_F238_41CF_202F72A50675, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E5196B_731D_F238_4165_58E834F839F8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5496B_731D_F238_41C5_026116F4BB06, 'hideEffect', false)",
 "media": "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D",
 "camera": "this.panorama_796A339F_7312_D618_41DC_0746EB01C19D_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_55318E56_7312_4E68_41DB_FA822CC62919, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E58969_731D_F238_41C7_3DE863EA3E6A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E5F96A_731D_F238_41D3_CA31D928DA30, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_5532DE56_7312_4E68_41C0_A26EF5FE1096, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_5532EE57_7312_4E68_41D4_E81B20E56A76, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E5D96A_731D_F238_41B0_B60F6F26F9E5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_5532AE57_7312_4E68_41C4_190C46B1CEDD, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E6396A_731D_F238_41C8_1933F397EA36, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_55316E57_7312_4E68_419D_993E3BB33F29, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6696A_731D_F238_41BE_F28665393459, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55312E57_7312_4E68_41D1_29A7FFDDBD26, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E4D96B_731D_F238_41CF_202F72A50675, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_5531CE57_7312_4E68_4192_87C53E1749D8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E5196B_731D_F238_4165_58E834F839F8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_5531BE5D_7312_4E18_41A7_67BD6AD8F9EA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E5496B_731D_F238_41C5_026116F4BB06, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579FAAC0_7312_5668_41D4_3CFE444BBAC9"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579EDAC0_7312_5668_41DB_22378831B5C4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E5B96B_731D_F238_41CF_85790DFC65FE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E5E96B_731D_F238_4152_987972D38D4D, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E5D96C_731D_F238_41D4_EB06B85FE63D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E6396C_731D_F238_41CD_98C460762C86, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6196C_731D_F238_41D9_71362607644B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E6796C_731D_F238_41DC_D6A28E6BE56F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E6B96C_731D_F238_41D3_33548AF0DA14, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E6F96D_731D_F238_41BC_7762D404A5AF, 'hideEffect', false)",
 "media": "this.panorama_796B171E_7312_BE18_41DC_83DF5B223129",
 "camera": "this.panorama_796B171E_7312_BE18_41DC_83DF5B223129_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_55303E5D_7312_4E18_41C4_95AA286B7C50, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E5B96B_731D_F238_41CF_85790DFC65FE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_53E5E96B_731D_F238_4152_987972D38D4D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_5530FE5D_7312_4E18_41DB_0CD3332C4437, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55309E5E_7312_4E18_41D2_70A7D94AE349, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53E5D96C_731D_F238_41D4_EB06B85FE63D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_552F5E5E_7312_4E18_41D1_7F150D36ED68, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E6396C_731D_F238_41CD_98C460762C86, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_552F3E5E_7312_4E18_41D1_96D8C438156E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6196C_731D_F238_41D9_71362607644B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_552FDE5E_7312_4E18_41D3_C38820DE1193, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E6796C_731D_F238_41DC_D6A28E6BE56F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_552F9E5E_7312_4E18_41B0_9C718CAEF6AB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E6B96C_731D_F238_41D3_33548AF0DA14, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_552FBE5F_7312_4E18_41C5_713391F0AD23, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E6F96D_731D_F238_41BC_7762D404A5AF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579EDAC0_7312_5668_41DB_22378831B5C4"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579E9AC6_7312_5668_41D6_002E52FDA90C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E6D96D_731D_F238_4191_0C53D4419E46, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E7096D_731D_F238_41C7_D13FB2AEFF66, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_53E7696D_731D_F238_4182_9CF5B01C72B3, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E7596E_731D_F238_41DA_8D681B1FE1AC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6296E_731D_F238_41CD_065FCB841BB7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E6196E_731D_F238_41D9_7466F966D69F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E6596E_731D_F238_41A0_C8D4743BEEF6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E6896E_731D_F238_41D2_1B39326F5BF8, 'hideEffect', false)",
 "media": "this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655",
 "camera": "this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_552E2E5F_7312_4E18_41C6_1CC66321F4A5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E6D96D_731D_F238_4191_0C53D4419E46, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_552EEE5F_7312_4E18_41CB_6BC7C5E6AA75, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E7096D_731D_F238_41C7_D13FB2AEFF66, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_53E7696D_731D_F238_4182_9CF5B01C72B3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_552D5E5F_7312_4E18_41D8_B010674813DC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_552D6E5F_7312_4E18_41D3_B12359812898, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53E7596E_731D_F238_41DA_8D681B1FE1AC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_552D2E5F_7312_4E18_41D9_07A051B7AC61, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53E6296E_731D_F238_41CD_065FCB841BB7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_552DCE60_7312_4E28_41CB_D2AD89EECAAA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53E6196E_731D_F238_41D9_7466F966D69F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_552D9E60_7312_4E28_41C0_218E13FC5FBA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53E6596E_731D_F238_41A0_C8D4743BEEF6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_552E2E60_7312_4E28_41CB_2323C7F2D09D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53E6896E_731D_F238_41D2_1B39326F5BF8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579E9AC6_7312_5668_41D6_002E52FDA90C"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579B0AC9_7312_5678_41C2_364604B41418, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E78976_731D_F228_41C2_4D989DD00C46, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E7C976_731D_F228_41BC_34DC9E40D3AB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D82976_731D_F228_41CC_8B9EBD234069, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_53D81977_731D_F228_41BC_74D843F0E33C, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D84977_731D_F228_41CD_355613C2BDA6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D8B977_731D_F228_41BE_1FB9BD4C4A2C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53D8F977_731D_F228_41D8_E5EDDCC8A070, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D8D977_731D_F228_41D9_ECDDFF72968B, 'hideEffect', false)",
 "media": "this.panorama_7968C914_7312_53E8_41D8_2F2288F73D77",
 "camera": "this.panorama_7968C914_7312_53E8_41D8_2F2288F73D77_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_5527FE6C_7312_4E38_41C0_DEAB2F26BA55, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53E78976_731D_F228_41C2_4D989DD00C46, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55278E6C_7312_4E38_41D8_738BF8487AB3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53E7C976_731D_F228_41BC_34DC9E40D3AB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55267E6C_7312_4E38_41D5_E76742317F4B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D82976_731D_F228_41CC_8B9EBD234069, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_53D81977_731D_F228_41BC_74D843F0E33C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_55263E6C_7312_4E38_41DA_4AE9F5AC386A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_5526CE6D_7312_4E38_41D2_8BBD1470CE5A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D84977_731D_F228_41CD_355613C2BDA6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55269E6D_7312_4E38_41C0_0251F2454EB3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D8B977_731D_F228_41BE_1FB9BD4C4A2C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_55255E72_7312_4E28_41DB_8F42B5EA0723, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_53D8F977_731D_F228_41D8_E5EDDCC8A070, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_55257E73_7312_4E28_41CD_3941FEB95A93, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53D8D977_731D_F228_41D9_ECDDFF72968B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579B0AC9_7312_5678_41C2_364604B41418"
},
{
 "begin": "this.registerKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C', this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C.get('visible')); this.registerKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A', this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A.get('visible')); this.registerKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD', this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD.get('visible')); this.registerKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3', this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3.get('visible')); this.registerKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16', this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16.get('visible')); this.registerKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E', this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E.get('visible')); this.registerKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028', this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028.get('visible')); this.registerKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A', this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A.get('visible')); this.setMapLocation(this.PanoramaPlayListItem_579A3ACA_7312_5678_41B4_DD79700C835B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 0); this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false); this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D93979_731D_F21B_41AA_0E5FFC982E64, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false); this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D9697A_731D_F218_41D2_FCFA1E92D786, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false); this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D9497A_731D_F218_41D9_9DAD79E506DD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false); this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D9897A_731D_F218_41C0_0B8564613EE1, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false); this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D9E97A_731D_F218_414B_7C5EA546299C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false); this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D9C97B_731D_F218_41C4_0C0977E2A29E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false); this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_53DA197B_731D_F218_41AA_00807CC665E8, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false); this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53DA497B_731D_F218_41BA_78075EB67A91, 'hideEffect', false)",
 "media": "this.panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791",
 "camera": "this.panorama_796AC8B9_7312_F218_41BE_7EBFBF1CB791_camera",
 "end": "if(this.existsKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')){ if(this.getKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A')) { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true, -1, this.effect_5523EE74_7312_4E28_41D3_69976AC8568A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, false, -1, this.effect_53D93979_731D_F21B_41AA_0E5FFC982E64, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A'); if(this.existsKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')){ if(this.getKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028')) { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true, -1, this.effect_55224E75_7312_4E28_41B6_F6C02C69F1EA, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, false, -1, this.effect_53D9697A_731D_F218_41D2_FCFA1E92D786, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77FFE780_68A3_305F_4195_72CF03F77028'); if(this.existsKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')){ if(this.getKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E')) { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true, -1, this.effect_55226E75_7312_4E28_41DC_13601DA94B8E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, false, -1, this.effect_53D9497A_731D_F218_41D9_9DAD79E506DD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E'); if(this.existsKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')){ if(this.getKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16')) { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true, -1, this.effect_5522DE75_7312_4E28_41DB_0FBE18A59740, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, false, -1, this.effect_53D9897A_731D_F218_41C0_0B8564613EE1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16'); if(this.existsKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')){ if(this.getKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3')) { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true, -1, this.effect_55236E75_7312_4E28_41CD_7E00762A73F1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, false, -1, this.effect_53D9E97A_731D_F218_414B_7C5EA546299C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3'); if(this.existsKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')){ if(this.getKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD')) { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true, -1, this.effect_55230E76_7312_4E28_41D0_EB162529B19F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, false, -1, this.effect_53D9C97B_731D_F218_41C4_0C0977E2A29E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD'); if(this.existsKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')){ if(this.getKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A')) { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true, -1, this.effect_53DA197B_731D_F218_41AA_00807CC665E8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, false, -1, this.effect_5523CE76_7312_4E28_41D9_3114553C9B2B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A'); if(this.existsKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')){ if(this.getKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C')) { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true, -1, this.effect_5523EE76_7312_4E28_41CF_2E7C12256FD9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, false, -1, this.effect_53DA497B_731D_F218_41BA_78075EB67A91, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_6D10649B_7332_5218_41D2_21101FE2809C'); this.trigger('tourEnded')",
 "start": "this.keepComponentVisibility(this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A, true); this.keepComponentVisibility(this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028, true); this.keepComponentVisibility(this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E, true); this.keepComponentVisibility(this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16, true); this.keepComponentVisibility(this.HTMLText_6E543D0E_7336_73F9_41CC_81437F6B71A3, true); this.keepComponentVisibility(this.HTMLText_6E4F1BBF_7332_B618_41DB_D7FE4B0A76CD, true); this.keepComponentVisibility(this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A, true); this.keepComponentVisibility(this.HTMLText_6D10649B_7332_5218_41D2_21101FE2809C, true)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_579A3ACA_7312_5678_41B4_DD79700C835B"
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811, this.camera_56559BCC_7312_5678_41D8_D1DB8222CAA1); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_656A3A92_7372_76E8_41B6_06F26954FCF9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0_HS_0_1_0_map.gif",
      "width": 27,
      "height": 199
     }
    ]
   },
   "pitch": -3.2,
   "hfov": 24.02
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B60B0FF_7315_D218_41C9_157453C9A101",
   "pitch": 18.47,
   "yaw": 109.09,
   "hfov": 8.45,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_653F8E69_7372_CE38_41D0_995FB0DA4D89",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 18.47,
   "hfov": 8.45
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7964D23B_7312_B618_41D7_78D43983BC42, this.camera_57899B06_7312_57E8_4157_6E6C8E1A6F7D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7D70109D_7312_B218_41D3_B841D39977CE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_0_1_0_map.gif",
      "width": 81,
      "height": 200
     }
    ]
   },
   "pitch": 5.36,
   "hfov": 69.97
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655, this.camera_566D9B7E_7312_5618_41DC_388E349A2E43); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7DAF238D_7312_76F8_41D9_67EDE848138A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_1_HS_1_1_0_map.gif",
      "width": 28,
      "height": 200
     }
    ]
   },
   "pitch": 4.78,
   "hfov": 18.92
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796A3870_7312_D228_41D3_E18DAAFD4655, this.camera_56610BA6_7312_5628_41D5_EF134D163394); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7D825E3D_7312_4E18_41C5_B5962063F0E5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_1_HS_2_1_0_map.gif",
      "width": 36,
      "height": 199
     }
    ]
   },
   "pitch": 5.59,
   "hfov": 15.77
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796A339F_7312_D618_41DC_0746EB01C19D, this.camera_57817B2B_7312_5638_4180_56D00CE99A14); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7C757A7C_7316_5618_41CE_1619100BA3CB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_3_1_0_map.gif",
      "width": 117,
      "height": 200
     }
    ]
   },
   "pitch": 9.45,
   "hfov": 93.66
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796B171E_7312_BE18_41DC_83DF5B223129, this.camera_5677CB57_7312_5668_41CE_440EB1BCE846); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_7D87755E_7317_D218_41D8_267F1B6CC00E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_4_1_0_map.gif",
      "width": 159,
      "height": 200
     }
    ]
   },
   "pitch": 3.08,
   "hfov": 79.37
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6550FB_7315_D218_41CF_0076F2B535DC",
   "pitch": -7.04,
   "yaw": -10.92,
   "hfov": 3.5,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7C4CA33C_7315_F618_41C0_8679FE3DA0DF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.04,
   "hfov": 3.5
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6560FB_7315_D218_41C2_384B3CDAC4AC",
   "pitch": -3.57,
   "yaw": 61.34,
   "hfov": 3.87,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7CBDEDC1_7312_5268_41CC_BAB15ECC18C2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.57,
   "hfov": 3.87
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_696A444C_7332_7278_41D8_66530D3BC35E",
   "pitch": -5.25,
   "yaw": -122.33,
   "hfov": 4.84,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7CDA5F47_7312_4E68_41C5_74206E2F3739",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -122.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.25,
   "hfov": 4.84
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_696A344C_7332_7279_417E_9A5286173E5A",
   "pitch": -6.5,
   "yaw": -174.64,
   "hfov": 5.04,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_63BF9761_7312_5E28_41D8_B06962BDA2AD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.5,
   "hfov": 5.04
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_796A339F_7312_D618_41DC_0746EB01C19D, this.camera_56CE9D5F_7312_5218_41D5_569714D257CF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6957ED8A_7376_72F8_41DB_FC8BFFCCE2EB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_0_1_0_map.gif",
      "width": 97,
      "height": 200
     }
    ]
   },
   "pitch": -4.73,
   "hfov": 78.83
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6300FD_7315_D218_41D3_2F690AA9E412",
   "pitch": -26.09,
   "yaw": 17.17,
   "hfov": 3.67,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_65A2B868_7376_7238_41D9_7007E2D0F380",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -26.09,
   "hfov": 3.67
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_79684356_7312_F668_41A7_E5AA7E6C9811, this.camera_56BECD7C_7312_5218_41DC_1ED2B4E028F4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "id": "overlay_6482A491_7375_D2E8_41DB_4B65E5FED08F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_2_1_0_map.gif",
      "width": 174,
      "height": 200
     }
    ]
   },
   "pitch": -3.84,
   "hfov": 67.47
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6B6350FD_7315_D218_41C0_05A1F2F41CF4",
   "pitch": -5.44,
   "yaw": -49.78,
   "hfov": 5.03,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_659A041F_7372_F218_41C8_C32619C75953",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.44,
   "hfov": 5.03
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_79699D2C_7312_D239_41DA_FB741852B062_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 30
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "minHeight": 1,
 "width": 100,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "borderRadius": 0,
 "right": 30,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 49,
 "propagateClick": true,
 "bottom": 8,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 75,
 "class": "IconButton",
 "maxHeight": 37,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 110,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": 110,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "91.304%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "Container",
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "children": [
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 30,
 "height": 51,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A3870_7312_D228_41D3_E18DAAFD4655_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6969044E_7332_7278_41D9_86D4FCDF3E5D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6270FC_7315_D218_41CB_57272841C458",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796B171E_7312_BE18_41DC_83DF5B223129_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6280FD_7315_D218_41CF_F61327255C30",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79609481_7312_52E8_41B6_BB22EBE8A641_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6070FF_7315_D218_41CC_E6F74D59A555",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_696BB44D_7332_7278_41D9_A27B439F66A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_696B044D_7332_7278_41D6_5E3C18C4BD6B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796A339F_7312_D618_41DC_0746EB01C19D_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6230FC_7315_D218_41D0_64F37EA5AA53",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7968C914_7312_53E8_41D8_2F2288F73D77_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B60C0FF_7315_D218_41DA_E61F50EC2B1C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6390FE_7315_D218_41CB_3C1A18B85080",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B63D0FE_7315_D218_41D2_D7D1C0CC1D8B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79684356_7312_F668_41A7_E5AA7E6C9811_0_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6010FE_7315_D218_41DC_58D58D5C6200",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_2_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6490FA_7315_D218_41D9_6641ED84280C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7964D23B_7312_B618_41D7_78D43983BC42_0_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B64A0FB_7315_D218_4194_82C69D253619",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796AFD9B_7312_5218_41D7_9EA2FD7601F9_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B60B0FF_7315_D218_41C9_157453C9A101",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_5_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6550FB_7315_D218_41CF_0076F2B535DC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_6_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6560FB_7315_D218_41C2_384B3CDAC4AC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_7_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_696A444C_7332_7278_41D8_66530D3BC35E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_796CEBE3_7312_B628_41AD_8391C3DED8DA_0_HS_8_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_696A344C_7332_7279_417E_9A5286173E5A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_1_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6300FD_7315_D218_41D3_2F690AA9E412",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_79699D2C_7312_D239_41DA_FB741852B062_0_HS_3_0.png",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_6B6350FD_7315_D218_41C0_05A1F2F41CF4",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "minHeight": 1,
 "width": 60,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 60,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "class": "IconButton",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "maxHeight": 60,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "minHeight": 1,
 "width": 58,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "class": "IconButton",
 "click": "this.openLink('https://www.instagram.com/nani_construction_realestate/', '_blank')",
 "maxHeight": 58,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "layout": "horizontal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "width": 113,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 49,
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "FLOORPLAN",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColorRatios": [
  0,
  1
 ]
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
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
