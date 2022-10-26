import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      console.log(
        getCLS(onPerfEntry),
        getFID(onPerfEntry),
        getFCP(onPerfEntry),
        getLCP(onPerfEntry),
        getTTFB(onPerfEntry)
      );
    });
  }
};

export default reportWebVitals;
