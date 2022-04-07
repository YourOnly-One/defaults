import * as params from '@params';

document.addEventListener('DOMContentLoaded', () => {
  // Initialising the script with the Project ID
  // you can find in the dashboard
  swetrix.init(params.swetrixid, {
    respectDNT: true
  })

  // Tracking page views
  swetrix.trackViews()
})
