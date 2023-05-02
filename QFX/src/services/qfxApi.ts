import {BASE_URL} from '@config/BaseUrl/urlconfig';
import axios from 'axios';

export const NowShowingApi = async (URL: string) => {
  const MAIN_URL = `${BASE_URL}${URL}`;
  const response = await axios.get(MAIN_URL);
  return response;
};

export const DescriptionApi = async (eventID: number) => {
  const MAIN_URL = `${BASE_URL}api/public/Event?eventId=${eventID}`;
  const response = await axios.get(MAIN_URL);
  return response;
};

export const AppVersionApi = async () => {
  const apiurl = `${BASE_URL}api/public/AppVersion?platform=Android`;
  const response = await axios.get(apiurl);
  return response;
};

export const ShowSelectionApi = async (eventId: string, ShowDate: string) => {
  const MAIN_URL = `${BASE_URL}api/public/ShowInformation?eventId=${eventId}&showDate=${ShowDate}`;
  const response = await axios.get(MAIN_URL);
  return response;
};
