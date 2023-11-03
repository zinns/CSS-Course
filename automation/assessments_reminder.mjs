import * as dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const assessmentsReminder = async () => {
  try {
    const message = `
  %0A
  \\-\\-\\-\\-\\-\\-
  %0A
%0A
*Reminder*%0A
%0A
It is time to do the assessment
%0A
Please go to this link https://forms.gle/RMQwMbVpoJ9n5rnJ7
%0A
*Recordatorio*%0A
%0A
Es hora de realizar la evaluación
%0A
Por favor ve a este link https://forms.gle/RMQwMbVpoJ9n5rnJ7
%0A
`;

    await axios.get(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.ZINNS_TELEGRAM_CHAT_ID}&text=${message}`,
    );
  } catch (error) {
    console.log(error);
  }
};

assessmentsReminder();
