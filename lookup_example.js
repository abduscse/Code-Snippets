downloadResourcesWithVisaStatus = condition => {
    return Resource.aggregate([
        {
            $match: condition
        },
        {
            $lookup:
            {
                from: "visa_details",
                localField: "empl_id",
                foreignField: "employee_id",
                as: "visa_details"
            },
        }
    ]).allowDiskUse(true);
};
