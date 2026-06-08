param([int]$Port = 3000, [string]$Root = "site")

$root = Resolve-Path $Root
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()

Write-Host ""
Write-Host "  Cristal42 tourne sur http://localhost:$Port/" -ForegroundColor Cyan
Write-Host "  Racine : $root" -ForegroundColor DarkGray
Write-Host "  Ctrl+C pour arreter." -ForegroundColor DarkGray
Write-Host ""

# Open browser after a short delay
Start-Job {
    param($p)
    Start-Sleep -Milliseconds 600
    Start-Process "http://localhost:$p/"
} -ArgumentList $Port | Out-Null

$mimeTypes = @{
  '.html'  = 'text/html; charset=utf-8'
  '.css'   = 'text/css; charset=utf-8'
  '.js'    = 'application/javascript; charset=utf-8'
  '.png'   = 'image/png'
  '.jpg'   = 'image/jpeg'
  '.jpeg'  = 'image/jpeg'
  '.svg'   = 'image/svg+xml'
  '.ico'   = 'image/x-icon'
  '.woff2' = 'font/woff2'
  '.webp'  = 'image/webp'
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response

    $urlPath = $req.Url.LocalPath.TrimStart('/')
    if ($urlPath -eq '') { $urlPath = 'index.html' }
    $filePath = Join-Path $root $urlPath

    if (Test-Path $filePath -PathType Leaf) {
      $ext  = [System.IO.Path]::GetExtension($filePath).ToLower()
      $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType     = $mime
      $res.ContentLength64 = $bytes.Length
      $res.StatusCode      = 200
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host "  200  $urlPath" -ForegroundColor Green
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
      $res.StatusCode      = 404
      $res.ContentLength64 = $body.Length
      $res.OutputStream.Write($body, 0, $body.Length)
      Write-Host "  404  $urlPath" -ForegroundColor Yellow
    }
    $res.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  Write-Host "`n  Serveur arrete." -ForegroundColor DarkGray
}
