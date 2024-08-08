import OpenAI from 'openai';
import { OPEN_AP_KEY } from './constans';

const client = new OpenAI({
  apiKey: OPEN_AP_KEY,dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client 
