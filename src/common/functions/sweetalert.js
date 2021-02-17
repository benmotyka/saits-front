import Swal from "sweetalert2";

export const sweetalert = async(icon, text) => {
    await Swal.fire({
        icon: icon,
        title: text,
        showConfirmButton: false,
        timer: 2000,
      });
}