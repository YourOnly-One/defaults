import * as params from '@params';
//import { parameters } from "insights-js";

insights.init(params.insightsioid);
insights.trackPages();
//insights.track({
//  id: "visitor",
//  parameters: {
//    path: parameters.path(),
//    locale: parameters.locale(),
//    screenType: parameters.screenType(),
//    referrer: parameters.referrer()
//  }
//})
