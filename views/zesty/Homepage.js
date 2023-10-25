/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Homepage
 * Name: homepage
 * Model ZUID: 6-f0b4a9e2a2-4cf6s3
 * File Created On: Wed Oct 25 2023 06:11:08 GMT-0700 (Pacific Daylight Time)
 *
 * Model Fields:
 *
 * image (images)
 * button_name (text)
 * team_section_description (textarea)
 * subheader (text)
 * header (wysiwyg_basic)
 * team_section_title (text)
 * work_section_title (text)
 * work_section_description (textarea)
 * services_section_title (text)
 * services_section_kicker (text)
 * team_section_title_2 (wysiwyg_basic)
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-90f5ecaf8d-cq7kj4.manager.zesty.io/schema/6-f0b4a9e2a2-4cf6s3
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from "react";
import Home from "@/components/pages/Home";

function Homepage({ content }) {
  return (
    <>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <Home content={content} />
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Homepage;
