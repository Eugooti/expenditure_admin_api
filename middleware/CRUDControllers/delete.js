const remove = async (model,req,res) => {
    try {
        const id=req.params.id;

        const result=await model.findByPk(id);

        if (!result){
            return res.status(404).json({ error: 'Record not found' });
        }

        //delete record
        result.destroy()
       return  res.status(200).json({
           message: 'Deleted successfully',
           success:true
       });


    }catch (error) {
       return  res.status(500).json({
           error: 'Failed to delete',
           success:false
       });

    }
}
module.exports=remove;