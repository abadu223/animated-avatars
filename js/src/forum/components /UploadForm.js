import Dropzone from 'dropzone';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';

export default class UploadForm extends Component {

  init() {

    this.uploaded = false;

    this.imageurl = m.prop(null);

    this.error = {
      status: false,
      message: '',
    }

    this.dropzone = {
      instance: null,
      options: {
        url: '#',
        maxFiles: 1,
        maxFilesize: 2,
        autoQueue: false,
        autoProcessQueue: false,
        thumbnailMethod: 'contain',
        dictDefaultMessage: 'Drop file here to upload',
        acceptedFiles: 'image/png,image/jpg,image/jpeg,image/gif',
      },
    }

  }

  view() {
    return (
      <div className="Form">
        <div className="Form-group">
          <p className="helpText">Upload image using URL</p>
          <input
            type="url"
            bidi={this.imageURL}
            name="imageURL"
            className="FormControl"
            placeholder="URL link"
            disabled={this.loading}
            autocomplete="off"
          />
        </div>
        <div className="Form-group">
          <p className="helpText">Or drop file down below</p>
          <div
            id="dropzone"
            class="dropzone"
            config={this.initdropzone.bind(this)}
          />
        </div>
        <div className="Form-group">
          {Button.component({
            className: 'Button Button--primary Button--block',
            loading: modal.loading,
            onclick: this.verifyfile.bind(this),
            children: app.translator.trans('animated-avatars.forum.modal.upload.next'),
            disabled: this.uploaded || this.loading || this.imageurl(),
          })}
        </div>
      </div>
    );
  }

  initdropzone($el, isInitialized) {

    if (isInitialized) return;

    this.dropzone.instance = new Dropzone($el, this.dropzone.options);
    this.dropzone.instance
      .on('maxfilesexceeded', function (file) {
        this.removeAllFiles();
        this.addFile(file);
      })
      .on('error', function (file) {
        this.removeFile(file);
      })
      .on('removedFile', function (file) {
        this.removeFile(file);
      });

  }

  verifyfile() {

    const files = this.dropzone.instance.files;
    const fileuploaded = files.length > 0;
    const imageurlregex = '(https?:\/\/.*\.(?:png|jpg|jpeg|gif))';
    const validimageurl = RegExp(imageurlregex).test(this.imageurl());

    this.loading = true;

    m.redraw();

    if (fileuploaded) {

      this.file = files[0];

      if (!this.file.accepted) this.invalidfile('/ * error * /');

      this.cropimage();

    }
  }

  invalidfile(reason) {
    console.log('error -> ', reason);
    this.error.status = true;
    this.error.message = reason;
  }

  cropimage() {
    this.props.callback({
      file: this.file,
      url: this.imageurl(),
    });
  }

  config(isInitialized) {

    if (isInitialized) return;

    console.log(this);

    // this.uploader = new Dropzone('div#dropzone', {

    // });

    // this.uploader
    //   .on('maxfilesexceeded', function (file) {
    //     this.removeAllFiles();
    //     this.addFile(file);
    //   })
    //   .on('error', function (file) {
    //     this.removeFile(file);
    //   })
    //   .on('removedFile', function (file) {
    //     this.removeFile(file);
    //   });
  }
}
