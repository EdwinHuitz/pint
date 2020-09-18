import EXIF from 'exif-js';
const axios = require('axios');

/**
 * !You have to add these tags to app.jsx in order to debug
 * 
 * import exifImg from "../../services/gpsService";
 * <img src="a.jpg" alt="" id="img" />
 * <pre id="allMetaDataSpan"></pre>
 * <button onClick={exifImg}>Click</button>
 */

export default function exifImg()
{
  let LoDD="";
  let LaDD="";
      const img = document.getElementById("img");
      EXIF.getData(img, function()
      {
        //gets all meta-data
        //let allMetaData = EXIF.getAllTags(this);


/** 
 * 
 * 
 * the way it works is that you get the meta data you're looking for by declaring it's meta-data reference name where the example says here 
 * 
 * EXIF.getTag(this, "here")
 * 
 * the photo you submit can be retrieved by using the above variable named img
 * 
 * **/


        //latitude ref
        //let gpsLaRef = EXIF.getTag(this, "GPSLatitudeRef");
        
        //latitude co-ords
        let gpsLa = EXIF.getTag(this, "GPSLatitude");
        
        //logitude co-ords
        let gpsLo = EXIF.getTag(this, "GPSLongitude");
        
        //convert Lat and Long to Decimal Degrees using this formula
        //DD = d + (min/60) + (sec/3600)

        //Latitude DD
        LaDD = gpsLa[0]+(gpsLa[1]/60)+(gpsLa[2]/3600);
        //Longtitude DD
        LoDD = gpsLo[0]+(gpsLo[1]/60)+(gpsLo[2]/3600);
        //renders data into a string with no styling (yet)
        let DataSpan = document.getElementById("allMetaDataSpan");
        
        const geo=process.env.REACT_APP_GEO_API;
        axios.get('https://geocode.xyz/'+LaDD+','+LoDD+'?geoit=json&auth='+geo)
          .then(response => {
              console.log(response.data);
              DataSpan.innerHTML=response.data.region;
            }).catch(error => {
                console.log(error);
              });
      });
  }