export class Const {
  public static readonly JAN = 'Jan';
  public static readonly FEB = 'Feb';
  public static readonly MAR = 'Mar';
  public static readonly APR = 'Apr';
  public static readonly MAY = 'May';
  public static readonly JUN = 'Jun';
  public static readonly JUL = 'Jul';
  public static readonly AUG = 'Aug';
  public static readonly SEP = 'Sep';
  public static readonly OCT = 'Oct';
  public static readonly NOV = 'Nov';
  public static readonly DEC = 'Dec';
  public static readonly TYPE = 'type';
  public static readonly FAMILY = 'family';

  public static readonly WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  public static readonly URL_PARAM_KEY = 'appid=';
  public static readonly URL_PARAM_Q = 'q=';
  public static readonly COUNTRY_CD = 'jp';
  public static readonly REQUEST_MODE_HTML = 'mode=html';

  public getYearList (): string[] {
    return [
      Const.JAN, Const.FEB, Const.MAR, Const.APR,
      Const.MAY, Const.JUN, Const.JUL, Const.AUG,
      Const.SEP, Const.OCT, Const.NOV, Const.DEC
    ];
  }
}
