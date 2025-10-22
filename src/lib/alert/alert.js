import Swal from "sweetalert2";

export const alertSuccess = async(message) => {
    return Swal.fire({
        title: "Success",
        icon: "success",
        text: message
    })
}

export const alertError = async(message) => {
    return Swal.fire({
        title: "Error",
        icon: "error",
        text: message
    })
}