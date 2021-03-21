import app from 'flarum/app';
import Model from 'flarum/Model';
import Forum from 'flarum/models/Forum';

import changeAvatarDropdown from './changeAvatarDropdown';

app.initializers.add('animated-avatars', () => {

  Forum.prototype.animatedAvatarsCanUploadGif = Model.attribute('animated-avatars.gif');

  /*  Remove default uplaod button from dialog and replace it with
  *   our extended avatar uploader <3
  */
  changeAvatarDropdown();

});