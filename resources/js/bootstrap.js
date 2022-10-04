window._ = require("lodash");
window.Popper = require("popper.js");

try {
  window.$ = window.jQuery = require("jquery");
  //require('bootstrap');

  //admin lte js files
  require("admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js");
  require("admin-lte/plugins/select2/js/select2.full.min.js");
  require("bootstrap-toggle/js/bootstrap-toggle.min.js");
  require("admin-lte/dist/js/adminlte.min.js");
  require("datatables.net-bs4");
  require("datatables.net-buttons-bs4");
  require("datatables.net-responsive-bs4");
  require("datatables.net-buttons-bs4/js/buttons.bootstrap4.min");
  require("datatables.net-buttons/js/buttons.html5");
  require("datatables.net-buttons/js/buttons.colVis");
  require("datatables.net-buttons/js/buttons.print");
} catch (e) {}

import jszip from "jszip/dist/jszip";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "./helpers/fonts/NotoSansBengali";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  NotoSansBengali: {
    normal: "NotoSansBengali.ttf",
    bold: "NotoSansBengali.ttf",
  },
  SolaimanLipi: {
    normal: "SolaimanLipi.ttf",
    bold: "SolaimanLipi.ttf",
  },
};
window.JSZip = jszip;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
