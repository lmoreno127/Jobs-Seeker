class JobsController < ApplicationController
    def index 
     @jobs=Job.all
     render component: 'Jobs', props: { jobs: @jobs } 
    end
end
