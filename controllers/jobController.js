const Job = require('../models/Job');


module.exports = {
    createJob : async (req, res) =>{
        const newJob = new Job(req.body);
        
        try {
            await newJob.save();

            res.status(201).json({status: true, message: 'Job created successfully.'});
        }catch(error){
        res.status(500).json(error);

        }

    },

    updateJob:  async (req, res) =>{
        const jobId = req.params.id;
        const updated =req.body;
        try {
            const updatedJon = await Job.findByIdandUpdate(jobId, updated, {new: true});
            if(!updateJob){
                return res.status(404).json({status: false, message: 'Job not found.'});
            }
            res.status(200).json({status: true, message: 'Job updated succcessfully'});
        } catch(error){
            res.status(500).json(error);
        }
    },
    deleteJob: async(req, res) => {
        const jobId = req.params.id;
        try{
            await Job.findByIdandDelete(jobId);
            res.status(200).json({ status: true, messageL:' Job Deleted successfully'});

        }catch(error){
            res.status(500).json(error);

        }
    },

    getJob: async(req, res) => {
        const jobId = req.params.id;
        try{
          const job = await Job.findById({_id: jobI}, {createdAt: 0, updateAt: 0, __V: 0});
          res.status(500). json(error); 
        }catch(error){
            res.status(500).json(error);
        }

    },     
    
};