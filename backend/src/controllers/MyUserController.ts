import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    // 1. Check if the user exists
    // 2. Check the user if it doesn't exist
    // 3. return the user object to the calling client

    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if(existingUser){
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        // auth0Id and email will be added
        await newUser.save();

        res.status(201).json(newUser.toObject());

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating user!" })
    }
}

const updateCurrentUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, city, country } = req.body;
        const user = await User.findById(req.userId); 
        // userId refer to id created by mongoose
        // so we have to get the id based on auth0Id
        // Could refer it under folder middleware, auth.ts

        if(!user){
            return res.status(404).json({ message: "User not found!" })
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();

        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating user!" })
    }
}

const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const currentUser = await User.findById(req.userId);

        if(!currentUser){
            return res.status(404).json({ message: "User not found!" });
        }

        res.json(currentUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting user!" })
    }
}

export default {
    createCurrentUser,
    updateCurrentUser,
    getCurrentUser,
}
