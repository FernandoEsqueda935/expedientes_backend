import ExpedienteModel from "../models/ExpedienteModel.js";

export const createExpediente = async (req, res) => {
    try {
        await ExpedienteModel.create(req.body);
        res.json({ message: "Expediente creado" });
    } catch (error) {
        res.json({ message: error });
    }
}