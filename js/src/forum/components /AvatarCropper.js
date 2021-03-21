import Croppr from 'croppr';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';

export default class AvatarCropper extends Component {

  init() {
    this.data = this.props.data;
    this.cropper = {
      instance: null,
      options: {
        aspectRatio: 1,
      },
    }
  }

  view() {
    return (
      <div className="Form Form--centered">
        <p className="helpText">Crop your image</p>
        <div className="Form-group">
          <img
            id="croppr"
            bidi={modal.croppr}
            src={this.data.file.dataURL}
            config={this.initcropper.bind(this)}
          />
        </div>
        <div className="Form-group">
          {Button.component({
            className: 'Button Button--primary Button--block',
            loading: modal.loading,
            children: app.translator.trans('animated-avatars.forum.modal.upload.title'),
            onClick: this.cropimage.bind(this),
          })}
          {
            LinkButton.component({
              href: '#',
              className: 'UploadAnotherLink',
              children: 'Change photo',
              onClick: this.changephoto.bind(this),
            })
          }
        </div>
      </div>
    );
  }

  changephoto() {
    console.log('changephot');
  }

  initcropper($el, isInitialized) {

    if (isInitialized) return;

    this.cropper.instance = new Croppr($el, this.cropper.options);
  }

  cropimage() {
    this.props.callback('file here');
  }
}
