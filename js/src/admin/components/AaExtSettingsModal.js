import SettingsModal from 'flarum/components/SettingsModal';

export default class AaExtSettingsModal extends SettingsModal {
  className() {
    return 'AaExtSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('animated-avatars.admin.modal.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>test</label>
        <input className="FormControl" bidi={this.setting('abadu-animated-avatars.custom_setting')}/>
      </div>
    ];
  }
}
