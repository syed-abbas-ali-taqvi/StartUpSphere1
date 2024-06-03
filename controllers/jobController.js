const Job = require('../models/founder');


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
            const updatedJob = await Job.findByIdAndUpdate(jobId, updated, {new: true});
            if(!updatedJob){
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
            res.status(200).json({ status: true, message: 'Job Deleted successfully'});

        }catch(error){
            res.status(500).json(error);

        }
    },

    getJob: async(req, res) => {
        const jobId = req.params.id;
        try{
          const job = await Job.findById({_id: jobId}, {createdAt: 0, updateAt: 0, __V: 0});
          res.status(200). json(job); 
        }catch(error){
            res.status(500).json(error);
        }

    },   
    
    getAllJobs: async(req, res) => {
        const recent = req.params.new;
        try{
            let jobs; 

        if(recent){
            jobs = await Job.find({},{createdAt: 0, updatedAt: 0}).sort({createdAt: -1}).limit(2)
        }else{
            jobs = await Job.find({},{createdAt: 0, updatedAt: 0})
        }

        res.status(200).json(jobs)

        }catch(error){
            res.status(500).json(error);
        }
    },

    
    searchJobs: async (req, res) => {
        console.log(req.params.key);
        try {
            const results = await Job.aggregate([
                {
                  $search: {
                    index: "jobsearch1",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]);
    
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json(error); 
        }
    }
    

};