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

  public getYearList (): string[] {
    return [
      Const.JAN, Const.FEB, Const.MAR, Const.APR,
      Const.MAY, Const.JUN, Const.JUL, Const.AUG,
      Const.SEP, Const.OCT, Const.NOV, Const.DEC
    ];
  }
}
