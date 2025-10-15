import userModels from "../USERMODELS/userModels";

export const creat = async (req,res)=>{
     try {
        const userData = new userModels(req.body);
        if(!userData){
         return res.status(404).json({mes:"user data not found"})
        }
    const saveDate = await userData.save();
        res.status(200).json(saveDate)
     } catch (error) {
        res.status(505).json({error:error})
     }
}

