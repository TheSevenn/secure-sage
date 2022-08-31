import jwt from "jsonwebtoken";

import authModel from "../models/authSchema.js";

export function protectRoutes(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            if (decoded) authModel.findOne({ _id: decoded.id }, (err, doc) => {
                if (err) console.log(err);
                next();
            })
        } catch (err) {
            res.status(401).json({ authStatus: false, message: "incorrect credentials!" });
        }
    } else
        res.status(401).json({ authStatus: false, message: "you need to be logged in to access this" })

}