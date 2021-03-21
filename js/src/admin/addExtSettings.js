import AaExtSettingsModal from './components/AaExtSettingsModal';

const addExtSettings = () => {
  app.extensionSettings['abadu-animated-avatars'] = () =>
    app.modal.show(new AaExtSettingsModal());
}

export default addExtSettings;