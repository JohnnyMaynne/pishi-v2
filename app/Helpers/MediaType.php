<?php

namespace App\Helpers;

class MediaType
{
    public static function getPreviewUrlAttribute(string $type,string $url)
    {
        $urls = collect([
            'image' => [
                'mimes' => [
                    'image/gif',
                    'image/avif',
                    'image/apng',
                    'image/png',
                    'image/webp',
                    'image/jpeg'
                ],
                'preview_url' => $url,
            ],
            'audio' => [
                'mimes' => [
                    'audio/mpeg',
                    'audio/aac',
                    'audio/wav',
                ],
                'preview_url' => global_asset('images/file-types/file-audio.svg'),
            ],
            'video' => [
                'mimes' => [
                    'video/mp4',
                    'video/webm',
                    'video/mpeg',
                    'video/x-msvideo',
                ],
                'preview_url' => global_asset('images/file-types/file-video.svg'),
            ],
            'document' => [
                'mimes' => [
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'application/pdf'
                ],
                'preview_url' => global_asset('images/file-types/file-document.svg'),
            ],
            'archive' => [
                'mimes' => [
                    'application/zip',
                    'application/x-7z-compressed',
                    'application/gzip',
                    'application/vnd.rar',
                ],
                'preview_url' => global_asset('images/file-types/file-archive.svg'),
            ],
        ]);

        $fileType = $urls->first(function ($item) use ($type) {
            return in_array($type, $item['mimes']);
        });

        return $fileType['preview_url'] ?? global_asset("images/file-types/file-other.svg");
    }

}
