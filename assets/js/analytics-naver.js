import * as params from '@params';

if(!wcs_add) var wcs_add = {};
wcs_add["wa"] = params.naveranalyticsid;
if(window.wcs) {
  wcs_do();
}
