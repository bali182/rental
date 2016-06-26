import {GoogleServices} from './google-services';

const googleServices = new GoogleServices();

const autocompleteService = () => googleServices.getService(
  'google.maps.places.AutocompleteService',
  google => new google.maps.places.AutocompleteService()
)

export function geocode(options) {
  return autocompleteService().then(service => new Promise((resolve, reject) => {
    service.getPlacePredictions(options, (results, status) => {
      if(status !== 'OK') {
        reject(status);
      } else {
        resolve(results);
      }
    });
  }));
}
