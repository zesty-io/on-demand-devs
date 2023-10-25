/**
    * Zesty.io Content Model Component
    * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
    *
    * Label: Globals
    * Name: clippings
    * Model ZUID: 6-f4e29be2a2-q94rjd
    * File Created On: Wed Oct 25 2023 06:11:08 GMT-0700 (Pacific Daylight Time)
    *
    * Model Fields:
    *
     * site_name (text)
 * logo (images)
    *
    * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
    * images are objects {content.image_name.data[0].url}
    *
    * This file is expected to be customized; because of that, it is not overwritten by the integration script.
    * Model and field changes in Zesty.io will not be reflected in this comment.
    *
    * View and Edit this model's current schema on Zesty.io at https://8-90f5ecaf8d-cq7kj4.manager.zesty.io/schema/6-f4e29be2a2-q94rjd
    *
    * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
    * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
    */
   
   import React  from 'react';
   
   function Clipping({ content }) {
       return (
           <>
               {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
               <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
               <div>{content.meta.web.seo_meta_description}</div>
               {/* End of Zesty.io output example */}
           </>
       );
   }
   
   export default Clipping;
   