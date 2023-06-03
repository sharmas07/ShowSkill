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
        await Resume.findByIdAndUpdate(req.params.id, req.body);
        const resume = await Resume.findById(req.params.id)
        res.status(200).json({resume:resume, message: "Resume updated successfully"});
    }catch(err){
        res.status(500).json({message: "Error updating resume"});
    }
}