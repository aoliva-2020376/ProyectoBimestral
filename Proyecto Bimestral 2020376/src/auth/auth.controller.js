import { encrypt } from '../../utils/encryp'
import User from '../user/user.model.js'



export const test = (req, res)=>{
    console.log('Test is running')
    res.send(
        {
            message: 'Test is running'
        }
    )
}

export const register = async(req, res)=>{
    try {
        let data = req.body
        let user = new User(data)
        user.password = await encrypt(user.password)
        user.role = 'CLIENT'
        await user.save()

        return res.send(
            {
                message: `Registered successfully, can be login with username: ${user.username}`
            }
        )
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                message: 'General error with user registration',
                err
            }
        )
    }
}

export const login = async(req, res)