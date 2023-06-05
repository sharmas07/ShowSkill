import Resume from "../models/resumeModel.js";

export const uploadResume = async (req, res)=>{
    try{
        const resume = new Resume(req.body);
        const newResume = await resume.save();
        res.status(200).json({newResume:newResume, message: "Resume uploaded successfully"});
    }catch(err){
        res.status(500).json({message: "Error uploading resume"});
    }
}

export const updateResume = async (req, res)=>{
    try{
        console.log(req.body)
        await Resume.findByIdAndUpdate(req.params.id, {$set:req.body});
        const resume = await Resume.findById(req.params.id)
        res.status(200).json({resume:resume, message: "Resume updated successfully"});
    }catch(err){
        res.status(500).json({message: "Error updating resume"});
    }
}

export const endorseResume = async (req, res)=>{
    const id = req.params.id
    const { userId } = req.body
    try {
        const resume = await Resume.findById(id)
        if(!resume.endorsements.includes(userId)){
            await resume.updateOne({$push: {endorsements: userId}});
            const endorsedResume = await Resume.findById(req.params.id)
            res.status(200).json(endorsedResume)
        }
        else{
            await resume.updateOne({$pull: {endorsements: userId}});
            res.status(200).json("resume unliked")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export const commentResume = async (req, res)=>{
    const id = req.params.id
    const { commenterUserName, comment } = req.body
    const newComment = {
        commenterUserName,
        comment
    }
    try {
       
            await Resume.findByIdAndUpdate(id,{$push: {comments: newComment}});
            const commentedResume = await Resume.findById(req.params.id)
            res.status(200).json(commentedResume)
        
    } catch (error) {
        res.status(500).json(error)
    }
}