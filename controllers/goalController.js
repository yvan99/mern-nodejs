// get goals 
const getGoals = (req,res)=>{
    res.status(200).json({message: 'OK'});
}

const setGoals = (req,res)=>{
// IF WE DONT GET A CERTAIN EXPECTED INPUT FROM THE HTTPREQUEST
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'OK'});
}

const updateGoal = (req,res)=>{
    res.status(200).json({message: 'OK'});
}

const deleteGoal = (req,res)=>{
    res.status(200).json({message: 'OK'});
}

module.exports = {
    getGoals,setGoals,updateGoal,deleteGoal
}