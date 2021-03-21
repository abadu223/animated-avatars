<?php

/*
 * This file is part of abadu/animated-avatars.
 *
 * Copyright (c) 2020 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Abadu\AnimatedAvatars;

// use Flarum\Extend;
// use Flarum\Api\Event\Serializing;
// use Flarum\User\Event\Saving;
// use Illuminate\Contracts\Events\Dispatcher;
// use Abadu\AnimatedAvatars\Listeners\SaveUserAvatar;
// use Abadu\AnimatedAvatars\Extend\Permissions;
// use Abadu\AnimatedAvatars\Api\Controllers\UploadAvatarController;

// use Flarum\Http\Middleware\CheckCsrfToken;

return [
    // (new Extend\Frontend('forum'))
    //     ->js(__DIR__ . '/js/dist/forum.js')
    //     ->css(__DIR__ . '/resources/less/forum.less'),
    // (new Extend\Frontend('admin'))
    //     ->js(__DIR__ . '/js/dist/admin.js')
    //     ->css(__DIR__ . '/resources/less/admin.less'),
    // new Extend\Locales(__DIR__ . '/resources/locale'),
    // (new Extend\Routes('api'))
    //     ->post(
    //         '/abadu/animated-avatars/users/{id}/avatar',
    //         'abadu.animated-avatars.upload',
    //         Api\Controllers\UploadAvatarController::class
    //     ),
    // function (Dispatcher $events) {
    //     $events->listen(Saving::class, Listeners\SaveUserAvatar::class);
    // },
    // new Permissions
    // (new Extend\Middleware('frontend'))
    //     ->insertAfter(CheckCsrfToken::class, YourMiddleware::class)
];
