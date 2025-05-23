/**
 * @desc   
 * @param   {string[]} allowedRoles 
 * @returns {function} 
 */
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ msg: 'Acceso denegado, no tiene el rol necesario' });
        }
        next(); 
    };
};

module.exports = authorizeRoles;