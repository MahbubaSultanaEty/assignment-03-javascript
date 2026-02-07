function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }
    if (otp.startsWith("ph-") && otp.length === 8) {
        return true;
    }
    return false;
}
let output = validOtp("ph-10985");
console.log(output);