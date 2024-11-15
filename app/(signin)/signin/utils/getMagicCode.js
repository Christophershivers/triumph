import {db} from '../../../(entire_site)/utils/db'


function getMagicCode(email) {
    db.auth.sendMagicCode({email})
}

export default getMagicCode
