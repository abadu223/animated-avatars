<?php

namespace Abadu\AnimatedAvatars\Extend;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class Permissions implements ExtenderInterface {

    public function extend(Container $container, Extension $extension = null) {

        $container['events']->listen(Serializing::class, [$this, 'settings']);

    }

    public function settings(Serializing $event) {

        if ($event->isSerializer(UserSerializer::class)) {

            $event->attributes['animatedAvatarsCanUploadGif'] = $event->actor->can('animated-avatars.gif');
            // app.forum.animatedAvatarsCanUploadGif();

        }

    }

}