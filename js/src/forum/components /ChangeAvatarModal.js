import Modal from 'flarum/components/Modal';
import AvatarCropper from './AvatarCropper';
import UploadForm from './UploadForm';

class ChangeAvatarModal extends Modal {

    init() {
        this.uploaded = false;
        this.cropped = false;
        this.data = {
            file: null,
            imageurl: '',
        }
    }

    className() {
        return 'AnimatedAvatarsUploadModal Modal--medium';
    }

    title() {
        return app.translator.trans('animated-avatars.forum.modal.upload.title');
    }

    content() {
        return (
            <div className="Modal-body">
                {
                    this.uploaded
                        ? (<AvatarCropper data={this.data} callback={this.uploadavatar.bind(this)} />)
                        : (<UploadForm callback={this.handleformsubmit.bind(this)} />)
                }
            </div>
        );
    }

    handleformsubmit(data) {
        console.log(data);

        this.uploaded = true;
        this.data = data;

        m.redraw();
    }

    cropavatar(file) {

    }

    uploadavatar(file) {
        console.log('uploading...', file);
    }

    success(response) {
        console.log(response);
    }

    failure(response) {
        console.log(response);
    }

    // onsubmit(e) {
    //     e.preventDefault();

    //     if (this.imageUploaded) {
    //         this.imageCropped = true;
    //     }

    //     this.loading = true;
    //     m.redraw();

    //     const dropzonehasfile = this.uploader.files.length > 0;
    //     const imageurlregex = '(https?:\/\/.*\.(?:png|jpg|jpeg|gif))';
    //     const validimageURL = RegExp(imageurlregex).test(this.aaAvatarUploadURL());

    //     if (dropzonehasfile) {
    //         this.file = this.uploader.files[0];

    //         if (this.file) {
    //             this.imageUploaded = true;
    //             // this.uploadfile(file, 'file');
    //         } else {
    //             // error
    //             console.log('error', 'nieprawidłowy plik');
    //             alert('eggg');
    //         }

    //     } else {
    //         if (validimageURL) {
    //             const url = this.aaAvatarUploadURL();

    //             const img = document.createElement('img');
    //             img.crossOrigin = 'anonymous';
    //             img.src = 'https://cors-anywhere.herokuapp.com/' + url;

    //             img.onload = () => {

    //                 const canvas = document.createElement('canvas');

    //                 canvas.width = img.width;
    //                 canvas.height = img.height;

    //                 canvas.getContext('2d').drawImage(img, 0, 0);

    //                 if (!canva)
    //                     console.log(canvas.toDataURL());

    //             }

    //             // this.uploadfile(url);

    //         } else {
    //             // error
    //             console.log('error', 'nieprawidłowy url');
    //             alert('Nieprawidłowy');
    //         }
    //     }

    //     this.loading = false;
    //     m.redraw();

    //     return;
    // }

    // uploadfile(avatar) {

    //     const user = app.session.user;
    //     const data = new FormData();

    //     data.append('avatar', avatar);

    //     this.loading = true;
    //     m.redraw();

    //     app
    //         .request({
    //             method: 'POST',
    //             // /abadu/animated-avatars/users/{id}/avatar
    //             url: `${app.forum.attribute('apiUrl')}/abadu/animated-avatars/users/${user.id()}/avatar`,
    //             serialize: (raw) => raw,
    //             data,
    //         })
    //         .then(this.success.bind(this), this.failure.bind(this));
    // }
}

export default ChangeAvatarModal;