import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  /* detail from frontend
 validation
 if user exists: username, email
 check for images,check for avtar
 upload to cloudinary
 create user obj- create ent in database
 remove password and refresh token from response
 check for user creation
 return res
 */

  const { fullname, email, username, password } = req.body;
  console.log("email", email);
  console.log(password);
});

export { registerUser };
