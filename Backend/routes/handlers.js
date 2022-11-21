import { userModel } from "../model/User";
import { encryptPassword, verifyHash } from "../services/bcrypt";
import { sendErrorResponse, sendSuccessResponse } from "../services/response";
import { passwordStrength } from "check-password-strength";

export const createUserHandler = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (email === undefined) {
      throw new Error("Email Missing");
    } else if (password === undefined) {
      throw new Error("Password Missing");
    } else if (name == undefined) {
      throw new Error("Name Missing");
    }

    const ans = passwordStrength(password).value;
    console.log(ans);
    if (ans === "Weak" || ans === "Too weak") throw new Error("Password is Weak!! Kindly use minimum 1 Uppercase, 1 Lowercase and a minimum lemgth of 8 characters");
    const hashPassword = await encryptPassword(password);
    const user = await userModel.create({
      email,
      full_name: name,
      password: hashPassword,
    });
    sendSuccessResponse(res, user);
  } catch (error) {
    if (error.code == "11000") {
      sendErrorResponse(res, "Duplicate Email Found");
      return;
    }
    sendErrorResponse(res, error.message);
  }
};

export const updateHandler = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (email === undefined) {
      throw new Error("Email Missing");
    } else if (password === undefined) {
      throw new Error("Password Missing");
    } else if (name == undefined) {
      throw new Error("Name Missing");
    }

    const user = await userModel.findOne({ email: email });
    if (user === null) throw new Error("User Not Found");

    const ans = passwordStrength(password).value;
    console.log(ans);
    if (ans === "Weak" || ans === "Too weak") throw new Error("Password is Weak!! Kindly use minimum 1 Uppercase, 1 Lowercase and a minimum lemgth of 8 characters");
    const hashPassword = await encryptPassword(password);
    user.password = hashPassword;
    user.full_name = name;

    await user.save();
    sendSuccessResponse(res, user);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

export const deleteHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === undefined) {
      throw new Error("Arguments Missing");
    } else if (password === undefined) {
      throw new Error("Password Missing");
    }
    const user = await userModel.findOne({ email });
    if (user == null) throw new Error("User Not Found");
    console.log(user);
    console.log(password);
    const verify = await verifyHash(password, user.password);
    console.log(verify);
    if (!verify) throw new Error("Password Incorrect");
    await user.remove();
    sendSuccessResponse(res, "Successfully Removed");
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    sendSuccessResponse(res, users);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === undefined) {
      throw new Error("Email Missing");
    } else if (password === undefined) {
      throw new Error("Password Missing");
    }

    if (email === "") {
      throw new Error("Email Missing");
    } else if (password === "") {
      throw new Error("Password Missing");
    }
    const user = await userModel.find({ email: email });
    if (user.length === 0) throw new Error("User Not Found");

    const verify = await verifyHash(password, user[0].password);

    if (!verify) throw new Error("Password Incorrect");

    sendSuccessResponse(res, { message: "Logged In Successfully" });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};
