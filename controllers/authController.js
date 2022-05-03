
export const getAuth = (req, res) => {
    res.send('This is auth');
}

export const currentUser = async (req,res) =>{
    res.send(req.currentUser);
}

