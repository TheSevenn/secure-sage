import express from "express";
const router = express.Router();

import accountModel from "../models/accountSchema.js";
import { addAccount } from "../db-operations/addAccount.js";
import { getAllAccounts } from "../db-operations/getAllAccounts.js";
import { deleteAccount } from "../db-operations/deleteAccount.js";
import { editAccount } from "../db-operations/editAccount.js";
import { protectRoutes } from "../middlewares/protectRoutes.js";

router.post("/new-account", protectRoutes, (req, res) => {
    try {
        if (req.body) {
            addAccount(req.body.account);
            console.log(req.body.account);
            res.status(201).json({ "message": "account added succesfully" });
        }
        else res.status(400).json({ "message": "cannot add account, please try again" })

    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get("/all-accounts", protectRoutes, async (req, res) => {
    try {
        const account = await getAllAccounts(accountModel);
        if (account)
            res.status(200).json(account);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

router.delete("/remove-account/:_id", protectRoutes, (req, res) => {
    try {
        console.log("req for: " + req.params._id);

        if (deleteAccount(accountModel, req.params._id))
            res.status(200).json({ "message": "account is successfully deleted!" });
    } catch (error) {
        res.status(500).json(error.message);
    }

});

router.patch("/edit-account/:_id", protectRoutes, (req, res) => {
    try {
        const update = req.body;
        if (update) {
            editAccount(req.params._id, update, accountModel);
            res.status(200).json({ "message": "account updated successfully" });
        }
        else res.status(400).json({ "message": "cannot update, try again later" });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

export default router;