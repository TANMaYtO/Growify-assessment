#!/usr/bin/env bash
# ==============================================================================
# Growify Headquarters Studio Tour - Frame Extraction Pipeline
# Converts raw 44MB MP4 (IMG_8295.MP4) into lightweight, high-performance WebP frames
# for HTML5 Canvas rendering.
# ==============================================================================

set -e

SOURCE_VIDEO="IMG_8295.MP4"
OUTPUT_DIR="public/frames"
DESKTOP_DIR="${OUTPUT_DIR}/desktop"
MOBILE_DIR="${OUTPUT_DIR}/mobile"

echo "🎬 Starting Growify Video Frame Extraction Pipeline..."

if [ ! -f "$SOURCE_VIDEO" ]; then
  echo "❌ Source video $SOURCE_VIDEO not found in root directory!"
  exit 1
fi

mkdir -p "$DESKTOP_DIR"
mkdir -p "$MOBILE_DIR"

# 1. Desktop Frame Stream (1280px width, 12 fps, WebP quality 80)
echo "📦 Generating Desktop WebP frame sequence (1280px @ 12fps)..."
ffmpeg -i "$SOURCE_VIDEO" \
  -vf "fps=12,scale=1280:-1" \
  -c:v libwebp \
  -quality 80 \
  -compression_level 4 \
  "${DESKTOP_DIR}/frame_%04d.webp"

# 2. Mobile Frame Stream (720px width, 8 fps, WebP quality 75)
echo "📱 Generating Mobile WebP frame sequence (720px @ 8fps)..."
ffmpeg -i "$SOURCE_VIDEO" \
  -vf "fps=8,scale=720:-1" \
  -c:v libwebp \
  -quality 75 \
  -compression_level 4 \
  "${MOBILE_DIR}/frame_%04d.webp"

echo "✨ Video pipeline complete! Frames generated in ${OUTPUT_DIR}/"
