rem
rem @file WWJ start batch file.
rem @author wuwenjun555 <wuwenjun555@gmail.com>
rem @copyright wuwenjun555 2022
rem @license MIT
rem @version 0.0.1
rem 

rem set %rootPath% = X:\ASrc\gitee\wwj
set rootPath=%cd%

rem goto X:\ASrc\gitee
cd..

rem goto X:\ASrc
cd..

rem goto X:\
cd..

rem goto X:\ASoftRun
cd ASoftRun

rem set %nwPath% = X:\ASoftRun\nwjs\nw.exe
set nwPath=%cd%\nwjs\nw.exe

if exist %nwPath% (
  rem goto X:\ASoftRun\nwjs
  cd nwjs
  
  rem run X:\ASoftRun\nwjs\nw.exe X:\ASrc\gitee\wwj
  start "" nw.exe %rootPath%
) else (
  rem run X:\ASrc\gitee\wwj\index.hta
  start "" %rootPath%\index.hta
)
