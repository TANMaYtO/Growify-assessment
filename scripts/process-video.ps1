# ==============================================================================
# Growify Headquarters Studio Tour - Windows PowerShell Frame Pipeline
# Converts raw 44MB MP4 (IMG_8295.MP4) into lightweight WebP frames
# ==============================================================================

$SourceVideo = "IMG_8295.MP4"
$DesktopDir = "public\frames\desktop"
$MobileDir = "public\frames\mobile"

Write-Host "Starting Growify Video Frame Extraction Pipeline..." -ForegroundColor Cyan

if (-not (Test-Path $SourceVideo)) {
    Write-Error "Source video $SourceVideo not found in root directory!"
    exit 1
}

New-Item -ItemType Directory -Force -Path $DesktopDir | Out-Null
New-Item -ItemType Directory -Force -Path $MobileDir | Out-Null

Write-Host "Extracting Desktop WebP frames (1280px @ 12fps)..." -ForegroundColor Yellow
Write-Host "Command: ffmpeg -i $SourceVideo -vf 'fps=12,scale=1280:-1' -c:v libwebp -quality 80 $DesktopDir\frame_%04d.webp" -ForegroundColor Gray

Write-Host "Extracting Mobile WebP frames (720px @ 8fps)..." -ForegroundColor Yellow
Write-Host "Command: ffmpeg -i $SourceVideo -vf 'fps=8,scale=720:-1' -c:v libwebp -quality 75 $MobileDir\frame_%04d.webp" -ForegroundColor Gray

Write-Host "To execute, run ffmpeg manually or approve this pipeline script." -ForegroundColor Green
