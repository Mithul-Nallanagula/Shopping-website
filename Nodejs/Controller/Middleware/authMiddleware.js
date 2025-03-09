import jwt from 'jsonwebtoken';

const SECRET_KEY = "MITHUL04";

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized or Invalid Token" });
        }
        req.user = decoded; // Add decoded user info to request object
        next();
    });
};

export default verifyToken;