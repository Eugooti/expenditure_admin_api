const update = async (Model, req, res) => {
    try {
        const { id } = req.params; // Assuming you pass the record ID in the URL params
        const [updatedRowsCount, updatedRows] = await Model.update(req.body, {
            where: { id },
            returning: true, // Return the updated rows
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'Record not found.',
            });
        }

        return res.status(200).json({
            success: true,
            result: updatedRows[0],
            message: 'Successfully updated.',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: 'Error while updating the record in the database',
            error: error.message,
        });
    }
};

module.exports = update;
