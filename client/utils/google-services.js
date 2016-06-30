import Loader from 'google-maps';
import keys from '../../config.json';

export class GoogleServices {
  constructor() {
    this._services = {};
  }

  getService(name, creator) {
    Loader.KEY = keys.maps;
    Loader.LIBRARIES = ['places'];
    Loader.LANGUAGE = 'en';
    const me = this;

    if (me._services[name]) {
      return Promise.resolve(me._services[name]);
    }
    return new Promise((resolve, reject) => {
      Loader.load(function (google, error) {
        if (error) {
          reject(error)
        } else {
          me._services[name] = creator(google);
          resolve(me._services[name]);
        }
      });
    });
  }
}