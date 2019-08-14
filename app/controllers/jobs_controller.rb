class JobsController < ApplicationController
    def all_jobs
      
    end
    def index 
     
     render component: 'MyJobs', props: { company: current_company,jobs: current_company.jobs } 
    end
    def new
        render component: 'FormJob', props: { company: current_company, method: "post" } 
    end
    def create
        @job=Job.new(job_params)
        @job.company=current_company
        @job.city=current_company.city
        if @job.save!
            redirect_to root_path
        end
        
    end
    def show
        
    end
    def edit
        @job=Job.find(params[:id])
        render component: 'FormJob', props: { company: current_company, method: "",job:@job }
    end
    def update
        @job=Job.find(params[:id])
        @job.update(job_params)
        render component: 'MyJobs', props: { company: current_company,jobs: current_company.jobs }
    end
    def destroy
     @job=Job.find(params[:id])
     @job.destroy
     render component: 'MyJobs', props: { company: current_company,jobs: current_company.jobs }
    end

    private

    def job_params
        params.require(:job).permit(:jobtitle,:description,:experience_required,:contract)
      end
    
end
