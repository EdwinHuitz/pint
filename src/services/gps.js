import EXIF from 'exif-js';

export function exifImg()
{
      const img = document.getElementById("img2");
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
        let gpsLaRef = EXIF.getTag(this, "GPSLatitudeRef");
        
        //latitude co-ords
        let gpsLa = EXIF.getTag(this, "GPSLatitude");
        
        //longitude ref
        let gpsLoRef = EXIF.getTag(this, "GPSLongitudeRef");
        
        //logitude co-ords
        let gpsLo = EXIF.getTag(this, "GPSLongitude");
        
        //altitude ref
        let gpsAlRef = EXIF.getTag(this, "GPSAltitudeRef");
        
        //renders data into a string with no styling (yet)
        let DataSpan = document.getElementById("allMetaDataSpan");
        DataSpan.innerHTML =`${gpsAlRef} | ${gpsLa} ${gpsLaRef} | ${gpsLo} ${gpsLoRef}`;
      });
  }