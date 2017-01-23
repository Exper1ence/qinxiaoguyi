module.exports = function ({Router, Rest, Post, Session, maxAge, SessionStore}) {
    const router = new Router();
    router.route('/')
        .post((req, res, next) => {
            Session.create(req.body)
                .then(user => {
                    if (user) {
                        req.session.cookie.expires = new Date(Date.now() + maxAge);
                        req.session.user = user;
                        res.json({ce: 233, da: user});
                    }
                    else
                        res.json({ce: 300});
                });
        })
        .get((req, res, next) => {
            if (req.session.user){
                req.session.cookie.expires = new Date(Date.now() + maxAge);
                res.json({ce: 233, da: req.session.user});
            }
            else
                res.json({ce: 300});
        })
        .delete((req, res, next) => {
            SessionStore.destroy(req.sessionID, () => res.json({ce: 233}));
        });
    return router;
};