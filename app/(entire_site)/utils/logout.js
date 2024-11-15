import {db} from './db'


export default function logout(){
    console.log('log out')
    db.auth.signOut()
}