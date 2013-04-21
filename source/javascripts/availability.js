
// Current date in form script
//By Lee Hinder (lee.hinder@ntlworld.com)
//Visit http://javascriptkit.com for this script and more
//set todays date
Now = new Date();
NowDay = Now.getDate();
NowMonth = Now.getMonth();
NowYear = Now.getYear();
if (NowYear < 2000) NowYear += 1900; //for Netscape
//function for returning how many days there are in a month including leap years
function DaysInMonth(WhichMonth, WhichYear)
{
  var DaysInMonth = 31;
  if (WhichMonth == "Apr" || WhichMonth == "Jun" || WhichMonth == "Sep" || WhichMonth == "Nov") DaysInMonth = 30;
  if (WhichMonth == "Feb" && (WhichYear/4) != Math.floor(WhichYear/4))
  DaysInMonth = 28;
  if (WhichMonth == "Feb" && (WhichYear/4) == Math.floor(WhichYear/4))
  DaysInMonth = 29;
  return DaysInMonth;
}
//function to change the available days in a months
function ChangeOptionDays(Which)
{
  DaysObject = eval("document.Form1." + "zday");
  MonthObject = eval("document.Form1."  + "zmonth");
  YearObject = eval("document.Form1."  + "zyear");
  Month = MonthObject[MonthObject.selectedIndex].text;
  Year = YearObject[YearObject.selectedIndex].text;
  DaysForThisSelection = DaysInMonth(Month, Year);
  CurrentDaysInSelection = DaysObject.length;
  if (CurrentDaysInSelection > DaysForThisSelection)
  {
    for (i=0; i<(CurrentDaysInSelection-DaysForThisSelection); i++)
    {
      DaysObject.options[DaysObject.options.length - 1] = null
    }
  }
  if (DaysForThisSelection > CurrentDaysInSelection)
  {
    for (i=0; i<(DaysForThisSelection-CurrentDaysInSelection); i++)
    {
      NewOption = new Option(DaysObject.options.length + 1);
      DaysObject.add(NewOption);
    }
  }
  if (DaysObject.selectedIndex < 0) DaysObject.selectedIndex == 0;
}
//function to set options to today
function SetToToday(Which)
{
  DaysObject = eval("document.Form1."  + "zday");
  MonthObject = eval("document.Form1."  + "zmonth");
  YearObject = eval("document.Form1."  + "zyear");
  YearObject[0].selected = true;
  MonthObject[NowMonth].selected = true;
  ChangeOptionDays(Which);
  DaysObject[NowDay-1].selected = true;
}
//function to write option years plus x
function WriteYearOptions(YearsAhead)
{
  line = "";
  for (i=0; i<YearsAhead; i++)
  {
    line += "<OPTION>";
    line += NowYear + i;
  }
  return line;
}

