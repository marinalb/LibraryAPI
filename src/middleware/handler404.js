
function handler404(req, res, next) {
    res.status(404).send({message: `NOT FOUND!!!!`});

}

export default handler404;