import * as params from '@params';

insights.init(params.insightsioid);
insights.trackPages();
insights.track({
  id: "read-post",
  parameters: {
    locale: parameters.locale(),
    screenSize: parameters.screenType(),
    referrer: parameters.referrer()
  }
})
