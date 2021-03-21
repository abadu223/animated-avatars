import app from 'flarum/app';

import addPermissions from './addPermissions';
import addExtSettings from './addExtSettings';

app.initializers.add('abadu-animated-avatars', app => {
    addExtSettings();
    addPermissions();
});
