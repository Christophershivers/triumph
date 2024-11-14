import { init, tx, id, Cursors } from '@instantdb/react';


const APP_ID = '5c0ff257-1f9a-4bd4-b961-fd305edf6960'

const db = init({ appId: APP_ID });

export  {db, tx, id, Cursors};
