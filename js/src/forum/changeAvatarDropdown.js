import { extend, override } from 'flarum/extend';
import AvatarEditor from 'flarum/components/AvatarEditor'
import Button from 'flarum/components/Button';
import ChangeAvatarModal from './components /ChangeAvatarModal';

export default () => {

  extend(AvatarEditor.prototype, 'controlItems', items => {

    // Remove default upload button
    items.remove('upload');

    // Add our button
    items.add(
      'aaChangeBtn',
      Button.component({
        icon: 'fas fa-cloud-upload-alt',
        children: app.translator.trans('animated-avatars.forum.change-btn-text'),
        onclick: () => app.modal.show(new ChangeAvatarModal())
      }));

    const avatarUrl = app.session.user.avatarUrl();

    if (avatarUrl) {
      items.remove('aaChangeBtn');
    } else {
      items.remove('remove');
    }
  });

  // Remove quick upload
  override(AvatarEditor.prototype, 'quickUpload', () => {
    return;
  });

  extend(AvatarEditor.prototype, 'remove', function () {
    return;
  });

};