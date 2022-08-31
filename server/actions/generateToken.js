import jwt from "jsonwebtoken";


export default function generateToken(email, _id) {
    if (_id)
        return jwt.sign({
            id: _id,
            email: email
        }, process.env.TOKEN_SECRET, { expiresIn: "24h" });

}