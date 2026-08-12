import Swal from 'sweetalert2';

export const LoadingModal = (text = 'Loading...') => {
  return Swal.fire({
  text: text,
  title: "Loading....",
  icon: "warning",
  confirmButtonColor: "#3085d6",
  width: '200px',
    didOpen: () => {
      Swal.showLoading();
    },
  });
}
export const MessageModal = async (options = {}, callback) => {
  return await Swal.fire({
    ...options,
/*     showConfirmButton: options.showConfirmButton ?? true, */
  }).then(async () => {
    if (typeof callback === "function") {
      return await callback();
    }
  });
}
export const ConfirmModal = async (options = {}) => {
  return await Swal.fire({
    ...options,
    showCancelButton: true,
    confirmButtonText: options.confirmButtonText ?? 'Yes',
    cancelButtonText: options.cancelButtonText ?? 'No',
  });
}
export const CloseModal = () => {
  return Swal.close();
}