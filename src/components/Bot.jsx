import { addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import { httpGet } from '../utils/httpClient';

export const handleNewUserMessage = async function(newMessage) {
  // Para realizar la busqueda en la base de datos
  const searchUrl =  "/search/movie?query=" + newMessage;
  let rawResponse = {}
  let responseText = ''

  toggleMsgLoader()
  await httpGet(searchUrl)
  .then(data => {
    rawResponse = data.results;
  });
  toggleMsgLoader()

  if (rawResponse.length > 0) {
    addResponseMessage('**👽 I found the following 🎥**\n');
    for (let index = 0; index < rawResponse.length; index++) {
      if (index === 3) {break;}
      responseText = '**Title**: ' + rawResponse[index].title + '\n\n';
      responseText += '**Overview**: ' + rawResponse[index].overview + '\n\n';
      responseText += '**Date**: ' + rawResponse[index].release_date + '\n\n';
      responseText += '⭐ ' + rawResponse[index].vote_average + '/10';
      addResponseMessage(responseText);
      responseText = ''
    }
    addResponseMessage('I hope I helped you 🥸, write me another one!');
  } else {
    responseText = "Sorry, I didn't find any match 😅, try something more specific."
    addResponseMessage(responseText);
  }
};