import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import ItemList from 'flarum/utils/ItemList';

const addPermissions = () => {

  // Create a single permission using PermissionGrid class
  PermissionGrid.prototype.gifItems = () => {

    const items = new ItemList();

    items.add('aa-upload-gif', {

      icon: 'fas fa-cat',
      label: app.translator.trans('animated-avatars.admin.permissions.add_gif'),
      permission: 'animated-avatars.gif'

    });

    return items;

  }

  // Create permissions group
  extend(PermissionGrid.prototype, 'permissionItems', function (items) {

    items.add('aa-gif', {

      label: app.translator.trans('animated-avatars.admin.permissions.label'),
      children: this.gifItems().toArray()

    });

  });

};

export default addPermissions;