param(
  [string]$Html = "C:\Users\Caio\Clients\Marketeia\_idv_build\post.html",
  [string]$Out  = "C:\Users\Caio\Clients\Marketeia\_idv_build\out.png",
  [int]$W = 1080,
  [int]$H = 1350
)
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$tmp = Join-Path $env:TEMP ("cr_" + [guid]::NewGuid().ToString("N"))
$uri = "file:///" + ($Html -replace '\\','/')
$cargs = @(
  "--headless=new","--disable-gpu","--hide-scrollbars","--no-first-run","--no-default-browser-check",
  "--force-device-scale-factor=2",
  "--screenshot=$Out",
  "--window-size=$W,$H",
  "--virtual-time-budget=7000",
  "--user-data-dir=$tmp",
  $uri
)
Start-Process -FilePath $chrome -ArgumentList $cargs -Wait -NoNewWindow
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
if (Test-Path $Out) { Write-Output ("OK " + (Get-Item $Out).Length + " bytes -> " + $Out) } else { Write-Output "FAIL: no output" }
