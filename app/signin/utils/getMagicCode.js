import {db} from '../../utils/db'


function getMagicCode(email) {
    db.auth.sendMagicCode({email})
}

export default getMagicCode
