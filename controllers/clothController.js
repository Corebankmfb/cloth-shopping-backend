import expressAsyncHandler from "express-async-handler";
import Cloth from "../models/cloths.js";

export const all_cloth = expressAsyncHandler(async (req, res) => {
	const cloth = await Cloth.find({})
	if (cloth) {
		res.status(201).json({
            success: "Success",
			message: 'Cloth details',
			status: 'ok',
			cloths: cloth,
		})
	} else {
		throw new Error('No cloth has been documented')
	}
})

export const register_cloth = expressAsyncHandler(async(req, res) => {
    const {name, size, price, refNo, color} = req.body

    console.log(req.body)

    const cloth = await Cloth.create({
        name, size, price, refNo, color
    })

    if(cloth){
        res.status(201).json({
            success: "Success",
            messages: "Cloth has been added to thge collection",
            status: "ok",
            cloths: cloth
        })
    }else {
        res.status(400)
        throw new Error("Invalid data inputed")
    }
})