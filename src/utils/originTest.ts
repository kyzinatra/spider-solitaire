let OriginTest: RegExp;

if (process.env.NODE_ENV === "development")
  OriginTest = /(https?:\/\/localhost:\d\d\d\d)|(https?:\/\/spider.kzteams.ru(\/*.)?)/;
else OriginTest = /(https?:\/\/spider.kzteams.ru(\/*.)?)/;
export { OriginTest };
